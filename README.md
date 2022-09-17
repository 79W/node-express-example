controllers/ - 定义你应用的路由和其他的逻辑
helpers/ - 可以被项目各部分所调用的*功能函数*（邮箱，队列，缓存，日志）
middlewares/ - Express 中间件，将要处理在进入路由之前的请求
models/ - 表示数据，实现业务逻辑和处理存储
public/ - 包含所有的静态文件，像图片、样式和脚本
config/ - 所有的配置文件
utils/ - 一些常用的js方法
views/ - 提供模板文件，模板文件将会在你路由中进行渲染和使用
index.js - 初始化应用
package.json - 你应用所依赖的特定版本的包