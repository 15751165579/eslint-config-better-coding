# 前端代码规范

### 一、JavaScript


### 1、冗余代码

  &emsp;&emsp;避免存在未使用的变量：

  - no-unused-vars

```JavaScript
  // 不推荐
  const foo = 1;

  // 推荐
  const foo = 1;
  bar(foo);
```

  &emsp;&emsp;避免类中无效的构造函数：

  - no-useless-constructor

```JavaScript
  // 不推荐
  class Student {
    construsctor() {}
  }

  // 推荐
  class Student {
    constructor(...args) {
      super(...args);
      this.age = 20;
    }
  }
```

### 2、规范命名

  &emsp;&emsp;变量建议采用驼峰命名法，第一个英文单词应该为名词：

```JavaScript
  // 不推荐
  const setCount = 10;
  const max_count = 10;

  // 推荐
  const maxCount = 10;
```

  &emsp;&emsp;常量命名建议全部大写，单词之间通过下划线分割：

```JavaScript
  // 不推荐
  const max_count = 20;

  // 推荐
  const MAX_COUNT = 20;
```

  &emsp;&emsp;函数命名建议采用驼峰命名法：

  - can 判断否可以执行某个动作 返回布尔值
  - has 判断是否包含某个值 返回布尔值
  - is 判断是否为某个值 返回布尔值

```JavaScript
  // 推荐
  function isArrayLike() {}
  function assignIn() {}
```

  &emsp;&emsp;构造函数采用帕斯卡命名法：

```JavaScript
  // 推荐
  class Student {}
```

### 3、低级错误

  &emsp;&emsp;采用 const 声明时，变量是不可以重新赋值：

  - no-const-assign

```JavaScript
  // 不推荐
  const foo = 1;
  foo = 2;

  // 推荐
  let foo = 1;
  foo = 2;
```

  &emsp;&emsp;对象字面量中不应该出现重复的属性：

  - no-dupe-keys

```JavaScript
  // 不推荐
  const foo = {
    bar: 2,
    bar: 1,
  }

  // 推荐
  const foo = {
    bar: 1,
  }
```

  &emsp;&emsp;在使用部分数组方法时，不要忘记返回值：

  - array-callback-return

```JavaScript
  // 不推荐
  const a = [1, 2, 3].map(item => {
    item = item * 2;
  })

  // 推荐
  const a = [1, 2, 3].map(item => item * 2);
```

  &emsp;&emsp;类中不应该出现重复的成员变量：

  - no-dupe-class-members

```JavaScript
  // 不推荐
  class Student {
    foo() {
      return 1;
    }
    foo() {
      return 2;
    }
  }

  // 推荐
  class Student {
    foo() {
      return 2;
    }
  }
```

  &emsp;&emsp;避免无效或者缺失 super 方法的调用：

  - constructor-super

```JavaScript
  // 不推荐
  class A {
    constructor() {
      super(); 
    }
  }
  class A extends B {
    constructor() { }
  }

  // 推荐
  class A {
    constructor() {
      this.age = 20;
    }
  }

  class A extends B {
    constructor() {
      super();
      this.age = 30;
    }
  }
```

  &emsp;&emsp;避免在 super 方法之前调用 this：

  - no-this-before-super

```JavaScript
  // 不推荐
  class Student extends People {
    constructor(...args) {
      this.name = 'default';
      super(...args);
    }
  }

  // 推荐
  class Student extends People {
    constructor(...args) {
      super(...args);
      this.name = 'default';
    }
  }
```

  &emsp;&emsp;import 语句置于顶部：

  - import/first

```JavaScript
  // 不推荐
  import foo from './foo';
  const bar = 'bar';
  import boo from './boo';

  // 推荐
  import foo from './foo';
  import boo from './boo';

  const bar = 'bar';
```

  &emsp;&emsp;export 应该置于底部：

  - import/exports-last

```JavaScript
  // 不推荐
  export default tool;
  const foo = 'foo';

  // 推荐
  const foo = 'foo';
  export default tool;
```

  &emsp;&emsp;避免模块重复的导入：

  - import/no-duplicates

```JavaScript
  // 不推荐
  import { name } from './info';
  import { age } from './info';

  // 推荐
  import { name, age } from './info';
```

  &emsp;&emsp;避免导出不存在的属性或者方法：

  - import/named

```JavaScript
  // 不推荐
  import { noBar } from './bar';

  // 推荐
  import { bar } from './bar';
```

  &emsp;&emsp;使用 === 进行对象相等比较，避免使用 == 带来未知的结果：

  - eqeqeq

```JavaScript
  // 不推荐
  if ('0' == 0) {
    console.lgo(0);
  }

  // 推荐
  if ('0' === 0) {
    console.log(0);
  }
```

  &emsp;&emsp;避免一个 for 循环的停止条件永远无法到达：

  - for-direction

```JavaScript
  // 不推荐
  for (var i = 0; i < 10; i--) {}

  // 推荐
  for (var i = 0; i < 10; i++) {}

```

  &emsp;&emsp;避免 switch 语句中出现重复的 case 条件：

  - no-duplicate-case

```JavaScript
  // 不推荐
  const sex = 1;
  let message = '';
  switch(sex) {
    case 1:
      message = '男1';
      break;
    case 0:
      message = '女';
      break;
    case 1:
      message = '男2';
      break;
    default:
      message = '未知';
  }

  // 推荐
  const sex = 1;
  let message = '';
  switch(sex) {
    case 1:
      message = '男';
      break;
    case 0:
      message = '女';
      break;
    default:
      message = '未知';
  }
```

  &emsp;&emsp;保证 switch 语句含有 default 分支：

  - default-case

```JavaScript
  // 不推荐
  let message = '';
  swicth(sex) {
    case 1:
      message = '男';
      break;
    case 2:
      message = '女';
      break;
  }

  // 推荐
  switch(sex) {
    case 1:
      message = '男';
      break;
    case 2:
      message = '女';
      break;
    default:
      message = '未知';
  }
```

  &emsp;&emsp;parseInt 函数必须含有基数，避免处理不同进制前缀时出现未知问题：

  - radix

```JavaScript
  // 不推荐
  parseInt(20);

  // 推荐
  Number.parseInt(20, 10);
```

  &emsp;&emsp;避免使用 Math.max 或者 Math.min 只传入一个参数：

  - safe-arguments/max-and-min

```JavaScript
  // 不推荐
  maxCount = Math.max(20);

  // 推荐
  maxCount = Math.max(20, maxCount);
```

### 4、最佳实践

  &emsp;&emsp;推荐采用具有块级作用域的 const 和 let 进行变量的声明，避免采用 var 声明变量带来的声明提升问题：

  - prefer-const
  - no-var

```JavaScript
  // 不推荐
  var foo = 1;
  var bar = 2;

  // 推荐
  const foo = 1;
  const bar = 2;
```

  &emsp;&emsp;对象字面量语法更加简洁：

  - no-new-object
  - no-array-constructor

```JavaScript
  // 不推荐
  const foo = new Object();
  const arr = new Array();

  // 推荐
  const foo = {};
  const arr = [];
```

  &emsp;&emsp;ES6 新增的属性和方法的简写语法，使得代码的可读性更强：

  - object-shorthand

```JavaScript
  // 不推荐
  const foo = 1;
  const obj = {
    foo: foo,
    bar: function() {}
  }

  // 推荐
  const foo = 1
  const obj = {
    foo,
    bar() {},
  }
```

  &emsp;&emsp;推荐对象的属性名称不加引号，这样更利于 JS 引擎解析：

  - quote-props

```JavaScript
  // 不推荐
  const foo = {
    'bar': 1,
  }

  // 推荐
  const foo = {
    bar: 1.
  }
```

  &emsp;&emsp;采用点号语法访问对象的属性，更加易读，简洁，也适于 JavaScript 压缩：

  - dot-notation

```JavaScript
  // 不推荐
  foo['bar']

  // 推荐
  foo.bar
```

  &emsp;&emsp;ES6 中新增的解构语法，可以增强代码的可读性：

  - prefer-destructuring

```JavaScript
  // 不推荐
  const arr = [1, 2, 3];
  const num1 = arr[0];
  const num2 = arr[1];

  const obj = { name: 'xiaoming' };
  const name = obj.name;

  // 推荐
  const arr = [1, 2, 3];
  const [num1, num2] = arr;

  const obj = { name: 'xiaoming' };
  const {name} = obj;
```

  &emsp;&emsp;采用 ES6 的模板语法拼接字符串，代码可读性更强：

  - prefer-template

```JavaScript
  // 不推荐
  const name = 'xiao ming';
  const message = 'hi' + ' ' + name;

  // 推荐
  const name = 'xiao ming';
  const message = `hi ${name}`;
```

  &emsp;&emsp;禁止使用 eval 语法，其对编译引擎并不友好：

  - no-eval

```JavaScript
  // 不推荐
  eval('const a = 1;');
```

  &emsp;&emsp;对于函数的声明，采用函数表达式以及非匿名函数的方式，函数表达式不存在声明提升的问题，增强模块的可读性和可维护性，非匿名函数则是保证错误堆栈有迹可循：

  - func-style
  - func-names

```JavaScript
  // 不推荐
  function foo() {}
  const foo = function() {}

  // 推荐
  const foo = function wrappedFoo() {}
```

  &emsp;&emsp;ES6 中的剩余参数语法不存在类数组与数组的转化过程：

  - prefer-rest-params

```JavaScript
  // 不推荐
  function foo() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
  }
  // 推荐
  function foo(...args) {
    return args.join('');
  }
```

  &emsp;&emsp;使用 ES6 中新增的默认参数语法处理函数参数的默认值，具有默认值的参数尽量放在最后：

```JavaScript
  // 不推荐
  function foo(name, age) {
    name = name || 'default';
  }
  // 推荐
  function foo(age, name = 'default') {}
```

  &emsp;&emsp;禁止对函数的参数进行修改，使得错误难以追踪：

  - no-param-reassign

```JavaScript
  // 不推荐
  function foo(a) {
    a = a || 1
  }
  // 推荐
  function foo(a) {
    const b = a || 1;
  }
```

  &emsp;&emsp;使用 ES6 新增的扩展运算符，可以提升代码的可读性：

  - prefer-spread

```JavaScript
  // 不推荐
  const nums = [1, 2, 3, 4];
  Math.max.apply(Math, nums);

  // 推荐
  const nums = [1, 2, 3, 4];
  Math.max(...nums);
```

  &emsp;&emsp;使用箭头函数作为回调函数，其自动绑定周围作用域的特性，一定程度上避免 this 指向的问题：

  - prefer-arrow-callback

```JavaScript
  // 不推荐
  [1, 2, 3].map(function x(item) {
    return item * 2;
  })
  // 推荐 
  [1, 2, 3].map((item) => item * 2);
```

  &emsp;&emsp;导入模块时，不推荐使用绝对路径：

  - import/no-absolute-path

```JavaScript
  // 不推荐
  import foo from '/foo';

  // 推荐
  import _ from 'lodash';
```

  &emsp;&emsp;不推荐使用命名空间的导入方式：

  - import/no-namespace

```JavaScript
  // 不推荐
  import * as foo from './foo';

  // 推荐
  import { name, age } from './foo';
```

  &emsp;&emsp;约定模块按照 内置模块、npm模块、相对路径模块的顺序导入：

  - import/order

```JavaScript
  // 不推荐
  import { connect } from 'dva';
  import fs from 'fs';
  import { throttle } from '../utils';

  // 推荐
  import fs from 'fs';
  import { connect } from 'dva';
  import { throttle } from '../utils';

```

  &emsp;&emsp;推荐导出语句采用 const 声明，通常情况下不需要动态改变模块内部的值：

  - import/no-mutable-exports
  
```JavaScript
  // 不推荐
  let age = 20;
  export default { age };

  // 推荐
  const age = 20;
  export default { age };
```

  &emsp;&emsp;避免多层嵌套表达式：

  - no-nested-ternary

```JavaScript
  // 不推荐
  const foo = maybe1 > maybe2 ? 10 : value1 > value2 ? 30 : 20;

  // 推荐
  const foo = maybe1 > maybe2 ? 20 : 30;
```

  &emsp;&emsp;避免不必需要的三元表达式：

  - no-unneeded-ternary

```JavaScript
  // 不推荐
  const foo = a ? a : b;
  const bar = a ? true : false;
  // 推荐
  const foo = a || b;
  const bar = !!a;
```

  &emsp;&emsp;对于复杂的表达式，尽量采用括号，增强可读性：

  - no-mixed-operators

```JavaScript
  // 不推荐
  const bar = a + b / c * d;

  // 推荐
  const bar = a + (b / c) * d;
```

### 5、代码格式

  &emsp;&emsp;字面量对象中风格统一的空格：

  - object-curly-spacing

```JavaScript
  // 不推荐
  const foo = {name: 'xiaoming'};
  const {name} = foo;

  // 推荐
  const foo = { name: 'xiaoming' };
  const { name } = foo;
```

  &emsp;&emsp;数组内风格统一的空格：

  - array-bracket-spacing

```JavaScript
  // 不推荐
  const arr = [ 1, 2 , 3 ];
  // 推荐
  const arr = [1, 2, 3];
```

  &emsp;&emsp;使用一致的引号来包裹字符串：

  - quotes [2, "single"]

```JavaScript
  // 不推荐
  const s = "hello world";

  // 推荐
  const s = 'hello world';
```

  &emsp;&emsp;采用风格一致的函数书写格式：

  - space-before-function-paren
  - space-before-blocks

```JavaScript
  // 不推荐
  const a = function(){}
  const b = function (){}
  const c = function() {}
  // 推荐
  const y = function foo() {}
```

  &emsp;&emsp;格式统一的箭头函数：

  - arrow-spacing 箭头前后的空格
  - arrow-parens 箭头函数保证参数被括号包裹

```JavaScript
  // 不推荐
  () =>{}
  ()=> {}
  a => {}

  // 推荐
  () => {}
  (a) => {}
```

  &emsp;&emsp;约定在最后一个 import 语句空出一行：

  - import/newline-after-import

```JavaScript
  // 不推荐
  import { connect } from 'dva';
  const age = 20;

  // 推荐
  import { connect } from 'dva';

  const age = 20;
```

  &emsp;&emsp;风格统一的缩进（2个空格）：

  - indent [2, 2]

```JavaScript
  // 不推荐
  const foo = function _foo() {
      console.log('1');
  }

  // 推荐
  const foo = function _foo() {
    console.log('1');
  }
```

  &emsp;&emsp;限制每一行最多80个字符，提高代码的可读性：

  - max-len

```JavaScript
  // 不推荐
  const foo = jsonData && jsonData.foo && jsonData.foo.bar && jsonData.foo.bar.baz && jsonData.foo.bar.baz.quux && jsonData.foo.bar.baz.quux.xyzzy;

  // 推荐
  const foo = jsonData
    && jsonData.foo
    && jsonData.foo.bar
    && jsonData.foo.bar.baz
    && jsonData.foo.bar.baz.quux
    && jsonData.foo.bar.baz.quux.xyzzy;
```

  &emsp;&emsp;代码块中的空格风格统一：

  - block-spacing

```JavaScript
  // 不推荐
  const foo = function _foo() {return false};
  
  // 推荐
  const foo = function _foo() { return false };
```

  &emsp;&emsp;逗号之间的空格风格统一：

  - comma-spacing

```JavaScript
  // 不推荐
  const foo = 1,bar = 2;
  const arr = [1 , 2];

  // 推荐
  const foo = 1, bar = 2;
  const arr = [1, 2];
```

  &emsp;&emsp;推荐使用拖尾逗号，更易读的 git 变更记录：

  - comma-dangle

```JavaScript
  // 不推荐
  const obj = {
    name: 'xiaoming'
  };

  // 推荐
  const obj = {
    name: 'xiaoming',
  };
```

  &emsp;&emsp;行尾使用分号，避免压缩代码时出现意外情况：

  - semi
  - no-extra-semi 不必要的分号

```JavaScript
  // 不推荐
  const age = 20

  // 推荐
  const age = 20;
```

  &emsp;&emsp;推荐代码的最大嵌套数不超过 4 层：

  - max-depth [2, 4]

```JavaScript
  // 不推荐
  if (true) {
    if (true) {
      if (true) {
        if (true) {
          if (true) {

          }
        }
      }
    }
  }
  // 推荐
  if (true) {}
```

  &emsp;&emsp;推荐函数的形参超过5个，则采用对象的方式：

  - max-params [2, 5]

```JavaScript
  // 不推荐
  const foo = function _foo(x1, x2, x3, x4, x5, x6) {};

  // 推荐
  const foo = function _foo({ x1, x2, x3, x4, x5, x6 }) {};
```


### 二、React

  &emsp;&emsp;可以划分为函数组件的不要采用 class 语法：

```JavaScript
  // 不推荐
  class ListItem extends Component {
    render() {
      return <div>{ this.props.message }</div>
    }
  }

  // 推荐
  function ListItem({ message }) {
    return (
      <div>{ message }</div>
    )
  }
```

  &emsp;&emsp;组件的命名推荐帕斯卡命名法：

  - react/jsx-pascal-case

```JavaScript
  // 不推荐
  import goodsList from './GoodsList';

  // 推荐
  import GoodsList from './GoodsList';

```

  &emsp;&emsp;推荐 JSX 语法中的开始标记与结束标记对齐：

  - react/jsx-closing-bracket-location
  - react/jsx-closing-tag-location

```JavaScript
  // 不推荐
  <Hello
    name="xiaoming"
    age={20}
   />

  <Hello
    name="xiaoming"
    age={20}/>

  // 推荐

  <Hello name="xiaoming" age={20} />

  <Hello
    name="xiaoming"
    age={20}
  />
```

  &emsp;&emsp;推荐 JSX 语法中的属性值采用双引号：

  - jsx-quotes

```JavaScript
  // 不推荐
  <Foo name='xiaoming' />

  // 推荐
  <Foo name="xiaoming" />
```

  &emsp;&emsp;推荐 JSX 语法中的空格风格统一：

  - no-multi-spaces
  - react/jsx-tag-spacing

```JavaScript
  // 不推荐
  <Foo    />
  // 推荐
  <Foo />
```

  &emsp;&emsp;推荐采用驼峰命名法命名 props 属性名：

```JavaScript
  // 不推荐
  <Foo user_name="xiaoming" />

  // 推荐
  <Foo userName="xiaoming" />
```

  &emsp;&emsp;推荐 img 标签填写 alt 属性：

  - jsx-a11y/alt-text

```JavaScript
  // 不推荐
  <img src="./head.png" />

  // 推荐
  <img src="./head.png" alt="image describle" />
```

  &emsp;&emsp;列表项必须要设置 key：

  - react/jsx-key

```JavaScript
  // 不推荐
  {
    todos.map((todo, index) => {
      <Todo {...todo} />
    })
  }
  // 推荐
  {
    todos.map((todo, index) => {
      <Todo {...todo} key={todo.id} />
    })
  }
```

  &emsp;&emsp;不推荐采用 index 作为 列表项的 key：

  - react/no-array-index-key

```JavaScript
  // 不推荐
  {
    todos.map((todo, index) => {
      <Todo {...todo} key={index} />
    })
  }
  // 推荐
  {
    todos.map((todo, index) => {
      <Todo {...todo} key={todo.id} />
    })
  }
```

  &emsp;&emsp;推荐检查组件传入的 props 类型：

```JavaScript
  // 错误示例代码
  function List({ title, onHandle }) {}

  // 正确示例代码
  function List({ title, onHandle }) {}

  List.propTypes = {
    title: PropTypes.string.isRequired,
    onHandle: PropTypes.func,
  }

  List.defaultProps = {
    onHandle: () => {},
  }
```

  &emsp;&emsp;推荐采用小括号包裹多行 JSX 语句：

  - react/jsx-wrap-multilines

```JavaScript
  // 不推荐
  render() {
    return <Foo title="foo">
              <Bar />
           </Foo>
  }
  // 推荐
  render() {
    return (
      <Foo title="foo" >
        <Bar />
      </Foo>
    )
  }
```

  &emsp;&emsp;推荐没有子节点的组件标签采用自闭方式：

  - react/self-closing-comp

```JavaScript
  // 不推荐
  <Foo title="foo"></Foo>  
  // 推荐
  <Foo title="foo" />
```

  &emsp;&emsp;推荐在 constructor 中通过 bind 方法绑定 this 的指向：

  - react/jsx-no-bind

```JavaScript
  // 不推荐
  class Foo extends Component {
    constructor(...args) {
      super(...args);
    }

    _onClick = () => {}

    render() {
      return <div onClick={this._onClick}>foo</div>
    }
  }
  // 推荐
  class Foo extends Component {
    constructor(...args) {
      super(...args);

      this._onClick = this._onClick.bind(this);
    }

    _onClick() {}

    render() {
      return <div onClick={this._onClick}>foo</div>
    }
  }
```

  &emsp;&emsp;禁止存在重名 props：

  - react/jsx-no-duplicate-props

```JavaScript
  // 不推荐
  <Hello message="xiaoming" message="xiaohong" />

  // 推荐
  <Hello message="xiaoming" />
```

  &emsp;&emsp;引入 React 依赖项，需要使用 JSX 语法：

  - react/jsx-uses-react

```JavaScript
  // 不推荐
  import React from 'react';

  // 推荐
  import React from 'react';
  <Foo message="foo" />
```

  &emsp;&emsp;推荐组件中布尔类型的 props 的命名以 is 或者 has 开头：

  - react/boolean-prop-naming: [2, { "rule": "^(is|has)[A-Z]([A-Za-z0-9]?)+" }]

```JavaScript
  // 不推荐
  function Foo({ enabled }) {}

  Foo.propTypes = {
    enabled: PropTypes.bool,
  }
  // 推荐
  function Foo({ isEnabled }) {}

  Foo.propTypes = {
    isEnabled: PropTypes.bool,
  }
```

  &emsp;&emsp;禁止在 setState 中使用 this.state 造成数据不同步的问题：

  - react/no-access-state-in-setstate

```JavaScript
  // 不推荐
  this.setState({
    count: this.state.count + 1,
  })

  // 推荐
  const count = this.state.count;
  this.setState({
    count: count + 1,
  })
```

  &emsp;&emsp;禁止使用 React 中的危险级别属性，可能会造成严重的安全漏洞：

  - react/no-danger

```JavaScript
  // 不推荐
  render() {
    return (
      <div dangerouslySetInnerHTML={{ __html: "Hello World" }}></div>
    );
  }
  // 推荐
  render() {
    return (
      <div>Hello World</div>;
    );
  }
```

  &emsp;&emsp;禁止在 componentDidMount 或者 componentDidUpdate 中同步调用 setState 方法：

  - react/no-did-mount-set-state
  - react/no-did-update-set-state

```JavaScript
  // 不推荐
  componentDidMount() {
    this.setState({
      name: 'xiaoming',
    })
  }

  // 推荐
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        name: 'xiaoming',
      })
    }, 1000)
  }
```

  &emsp;&emsp;禁止直接去修改 state 中的属性值：

  - react/no-direct-mutation-state

```JavaScript
  // 不推荐
  this.state.name = 'xiaoming';

  // 推荐
  this.setState = {
    name: 'xiaoming',
  }
```

  &emsp;&emsp;推荐组件中事件处理方法以 handle 为前缀，如果是 props 传入的事件处理方法以 on 为前缀：

  - react/jsx-handler-names

```JavaScript
  // 不推荐
  <Foo handleChange={this.handleChange} />
  <Foo onChange={this.componentChanged} />

  // 推荐
  <Foo onChange={this.handleChange} />
  <Foo onChange={this.props.onFoo} />
```

  &emsp;&emsp;推荐 JSX 语句的嵌套不超过4层：

  - react/jsx-max-depth [2, { max: 4 }]

```JavaScript
  // 不推荐
  <App>
    <Foo>
      <Bar>
        <Baz>
          <Hello />
        </Baz>
      </Bar>
    </Foo>
  </App>
```

  &emsp;&emsp;推荐组件中每一行的 porps 属性数量不超过3个：

  - react/jsx-max-props-per-line: [2, { maximum: 3 }]

```JavaScript
  // 不推荐
  <Foo age={20} message="hi" name="xiaoming" />

  // 推荐
  <Foo
    age={20}
    message="hi"
    name="xiaoming"
  />
```

### 三、CSS

  &emsp;&emsp;推荐采用驼峰命名法命名选择器：

  - css-modules/no-unused-class: [2, { camelCase: true }]

```CSS
  /* 不推荐 */
  .list-item {
    color: red;
  }

  /* 推荐 */
  .listItem {
    color: red;
  }
```

  &emsp;&emsp;避免引用不存在的类名

  - css-modules/no-undef-class: [2, { camelCase: true }]

  &emsp;&emsp;避免存在未使用的类名：

  - css-modules/no-unused-class: [2, { camelCase: true }]