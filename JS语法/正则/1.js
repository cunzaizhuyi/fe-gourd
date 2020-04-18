let str = 'he is xiaoming, her is xiaohong, it is banana';

// js中有两种方法构造正则对象：字面量 和 构造函数
let reg = /\\bis\\b/;
let reg2 = new RegExp('\\bis\\b');
// console.log(str.replace(reg, 'IS'));
// console.log(str.replace(reg2, 'IS'));

// ----------------------------修饰符 i g m--------------------------------
// 修饰符： g, i, m
// g全行，m多行，i忽略大小写
let reg3 = /\bis\b/g;
let reg4 = new RegExp('\\bis\\b', 'g');
// console.log(str.replace(reg3, 'IS'));
// console.log(str.replace(reg4, 'IS'));

// ----------------------------[] 以及 []中的^ --------------------------------
// [] 表示或者， 如 [ab]表示a or b; 
// [] 中的^表示取反，[^ab]表示不属于a或者b的都被匹配
// console.log('a12b3'.replace(/[ab]/g, 'X'));
// console.log('a12b3'.replace(/[^ab]/g, 'X'));

// ----------------------------范围类 []中的- --------------------------------
// console.log('a12b3'.replace(/[a-z3-9]/g, 'X'));

// ----------------------------预定义类 --------------------------------
// ., \d, \D, \s, \S, \w, \W
// 除回车换行外任意字符，单词边界，非单词边界，空白符，非空白符，单词（字母数字下划线），非单词
// console.log('a12b3'.replace(/./g, 'X'));
// console.log('a12b3 is'.replace(/\d/g, 'X'));
// console.log('a 12 b3 '.replace(/\s/g, '')); // 字符串去空格
// console.log('a12b3   '.replace(/\W/g, 'X'));

// ----------------------------边界 ^$ \b \B --------------------------------
// console.log('a12b3'.replace(/^a/g, 'X'));
// console.log('a12b3'.replace(/^a$/g, 'X'));

// ----------------------------量词 --------------------------------
// ? + * {m} {m, n}, {m,}
// 0-1, 1-n, 任意次, m次，m-n次，至少m次

// ----------------------------贪婪模式 非贪婪模式 --------------------------------
// 默认是贪婪模式
// console.log('12345678'.replace(/\d{2,4}/, 'X'));
// 量词后面加？表示非贪婪模式。
// console.log('12345678'.replace(/\d{2,4}?/, 'X'));


// ----------------------------分组、分组后的反向引用$1、分组中的“或|”  ---------------------------
// console.log('123-456-789-'.replace(/\d{3}-{3}/, 'X'));
// console.log('123-456-789-'.replace(/(\d{3}-){3}/, 'X'));

// console.log('123-456-789'.replace(/(\d{3})-(\d{3})-(\d{3})/, '$1/$2/$3'));

// console.log('helloworld'.replace(/hel(lo|ol)world/, 'X'))
// console.log('helolworld'.replace(/hel(lo|ol)world/, 'X'))


// -----------------------------正则表达式对象的属性-------------------------------
// let reg5 = /\d{3}/g;
// console.log(reg5.source) //readonly
// console.log(reg5.global) //readonly
// console.log(reg5.ignoreCase) //readonly
// console.log(reg5.multiline) //readonly


// ----------------------------正则运用--------------------------------
let url = 'http://www.baidu.com/apis/getUser?name=zhangsan&age=lisi';
function getValueByKey(url, key){
  let reg = new RegExp(`(${key}=\\w+)`);
  let result = reg.exec(url);
  return result;
}
console.log(getValueByKey(url, 'name'));