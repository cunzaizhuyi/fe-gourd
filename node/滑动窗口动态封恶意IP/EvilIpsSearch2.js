
class EvilIpsSearch2{

    /**
     * @param duration 单位：豪秒
     * @param threshold
     * @param callback
     */
    constructor(duration, threshold, callback){
        // 维护多大的时间窗口
        this.duration = duration;

        // 请求数量的阈值。超过阈值的会在窗口结束时刻 加入结果集
        this.threshold = threshold;

        // 回调函数。调用方对恶意IP的处理
        this.callback = callback;

        // 按照时间顺序 入队。存{ip, time}对
        this.reqQueue = [];

        // this.reqQueue的统计结果，key是IP，value是次数
        this.hash = {};

        // 仅用一次。标识node启动时间
        this.nodeStartTime = Date.now();
    }

    // 处理当前时刻最新入队的请求
    addRequest(ip, time = Date.now()){
        this._deQueue(time);

        // 进队处理。两件事：1，入队列；2，维护统计表
        this.reqQueue.push({ip, time});
        this.hash[ip] = ~~this.hash[ip] + 1;


        // 这里的 if 是为了保证，node启动后的第一个窗口还没够this.duration那么大时，不需要推送结果
        // console.log(this.hash);
        if (time - this.duration >= this.nodeStartTime){
            this.callback(this._getEvilIps());
        }
    }

    // 每次进来新请求，即是一个新时刻，要踢出超出固定时间窗口的较早请求。
    _deQueue(time){
        let windowStartTime = time - this.duration;
        let q = this.reqQueue;
        while(q.length && q[0].time < windowStartTime){
            this.hash[q[0].ip] = this.hash[q[0].ip] - 1;
            q.shift();
        }
    }

    // 获取超过阈值的IP
    _getEvilIps(){
        let ips = [];
        for(let key in this.hash){
            if (this.hash[key] >= this.threshold){
                ips.push(key);
            }
        }
        return ips;
    }
}


// 下面是测试部分    不断获取----->20秒时间窗口里 >=5次的请求IP
let iptool = new EvilIpsSearch2(20000, 5, (evilIpArr) => {
    // 一秒进一个请求，40秒约有20个时间窗口。
    console.log('evilIpArr', evilIpArr);
});

let cnt = 1;
let timeId = setInterval(() => {
    if (cnt > 40) {
        clearInterval(timeId);
        return;
    }
    cnt++;


    let s = ~~(Math.random() * 5 + 1); // 1-5
    let str = '192.168.22.' + s;
    // console.log(str)
    iptool.addRequest(str);
}, 1000);