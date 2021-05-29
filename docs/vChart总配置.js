//折线seting配置项
{
    dimension:array//维度,默认columns第一项为维度
    metrics:array//指标默认columns第二项起为指标
     xAxisType:string//横轴的数据类型,可选值: category, value, time, log
    yAxisType:array//左右坐标轴数据类型可选值: KMB, normal, percent
    yAxisName:array//左右坐标轴标题
    axisSite:object//指标所在的轴,默认不在right轴的指标都在left轴
    stack:object//堆叠选项
    area:boolean//是否展示为面积图默认为false
    scale:array//是否是脱离 0 值比例默认为[false, false]，表示左右两个轴都不会脱离0值比例。设置成 true 后坐标刻度不会强制包含零刻度
    min:array//左右坐标轴最小值
    max:array//左右坐标轴最大值
    digit:number//设置数据类型为percent时保留的位数默认为2
    labelMap:object//	设置指标的别名，同时作用于提示框和图例
    legendName:object//设置图表上方图例的别名
}
//柱状
{
    dimension:array//维度,默认columns第一项为维度
    metrics:array//指标默认columns第二项起为指标
    yAxisType:array//左右坐标轴数据类型可选值: KMB, normal, percent
    yAxisName:array//左右坐标轴标题
    axisSite:object//指标所在的轴,默认不在right轴的指标都在left轴
    stack:object//堆叠选项
    dataOrder:object,boolean	//	设置数据排序方式	, 默认为false
    label:object//设置图形上的文本标签
    itemStyle:object//图形样式
    showLine:array//展示为折线图的指标
    xAxisType:string//横轴的类型		可选值'category'，'value'，默认为'category'
    scale:array//是否是脱离 0 值比例默认为[false, false]，表示左右两个轴都不会脱离0值比例。设置成 true 后坐标刻度不会强制包含零刻度
    min:array//左右坐标轴最小值
    max:array//左右坐标轴最大值
    digit:number//设置数据类型为percent时保留的位数默认为2
    labelMap:object//	设置指标的别名，同时作用于提示框和图例
    legendName:object//设置图表上方图例的别名
    opacity:number//透明度
}
//条形图
{
    dimension:array//维度,默认columns第一项为维度
    metrics:array//指标默认columns第二项起为指标
    xAxisType:string//上下坐标轴数据类型可选值: KMB, normal, percent
    xAxisName:array//上下坐标轴标题
    axisSite:object//指标所在的轴,默认不在right轴的指标都在bottom轴
    stack:object//堆叠选项
    dataOrder:object,boolean	//	设置数据排序方式	, 默认为false
    label:object//设置图形上的文本标签
    itemStyle:object//图形样式
    yAxisType:string//zhong轴的类型		可选值'category'，'value'，默认为'category'
    scale:array//是否是脱离 0 值比例默认为[false, false]，表示左右两个轴都不会脱离0值比例。设置成 true 后坐标刻度不会强制包含零刻度
    min:array//左右坐标轴最小值
    max:array//左右坐标轴最大值
    digit:number//设置数据类型为percent时保留的位数默认为2
    labelMap:object//	设置指标的别名，同时作用于提示框和图例
    legendName:object//设置图表上方图例的别名
    opacity:number//透明度
}
//饼图
{
    dimension:		string	//维度默认columns第一项为维度
    metrics:	string	//指标	默认columns第二项为指标
    dataType:		string	//数据类型可选值: KMB, normal, percent
    legendLimit:	number//legend显示数量限制		legend数量过多会导致饼图样式错误，限制legend最大值并且当超过此值时，隐藏legend可以解决这个问题
    selectedMode:	string//选中模式		可选值：single, multiple，默认为false
    hoverAnimation:boolean	//是否开启hover  在扇区上的放大动画效果		默认值为true
    radius:	number//饼图半径		-
    offsetY	:number//纵向偏移量		-
    digit:number	//设置数据类型为percent时保留的位数		默认为2
    roseType:string//	显示为南丁格尔玫瑰图		默认不展示为南丁格尔玫瑰图，可设置为'radius', 'area'
    label	:object//饼图图形上的文本标签		内容参考文档
    labelLine:object//	标签的视觉引导线样式		内容参考文档
    itemStyle:object//图形样式		内容参考文档
    level:array//	多圆饼图时设置		-
    limitShowNum:	number//	设置超过此数字时使用‘其他’代替	此时数据会按照由大到小顺序显示
}
//环图
{
    dimension:string//	维度		默认columns第一项为维度
    metrics	:string//指标		默认columns第二项为指标
    dataType:string//	数据类型		可选值: KMB, normal, percent
    legendLimit:number//	legend显示数量限制		legend数量过多会导致环图样式错误，限制legend最大值并且当超过此值时，隐藏legend可以解决这个问题
    selectedMode:string//	选中模式		可选值：single, multiple，默认为false
    hoverAnimation:boolean//	是否开启hover  在扇区上的放大动画效果		默认值为true
    radius:array//	环图外半径与内半径		-
    offsetY:number//	纵向偏移量		-
    digit:number//	设置数据类型为percent时保留的位数		默认为2
    roseType:string//	显示为南丁格尔玫瑰图		默认不展示为南丁格尔玫瑰图，可设置为'radius', 'area'
    label:object//	环图图形上的文本标签		内容参考文档
    labelLine:object//	标签的视觉引导线样式		内容参考文档
    itemStyle:object	//图形样式		内容参考文档
    limitShowNum:number//	设置超过此数字时使用‘其他’代替		此时数据会按照由大到小顺序显示
}
//瀑布图
{
    dimension:string//	维度		默认columns第一项为维度
    metrics:string//	指标		默认columns第二项为指标
    dataType:string//	数据类型		可选值: KMB, normal, percent
    totalNum:number	//总量		默认瀑布图总量为所有数据的和
    totalName:string//	总量的显示文案		默认显示总计
    remainName:string//	剩余的显示文案		默认显示其他
    digit:number//	设置数据类型为percent时保留的位数		默认为2
}
//漏斗图
{
    dimension:string	//维度		默认columns第一项为维度
    metrics:string//	指标		默认columns第二项为指标
    dataType:string//	数据类型		可选值: KMB, normal, percent
    sequence:array//	数据显示顺序		默认按照数据大小顺序
    ascending:boolean//	是否显示为金字塔		默认为false
    useDefaultOrder:boolean//	是否自动按照数值大小排序		默认为false
    filterZero:boolean//	是否过滤指标为0的数据		默认为false
    digit:number//	设置数据类型为percent时保留的位数		默认为2
    label:object//	设置文本标签样式		内容参考文档
    labelLine:object//	设置标签的视觉引导线样式		内容参考文档
    itemStyle:object//	设置图形样式		内容参考文档
}
//雷达图
{
    dimension:string//	维度		默认columns第一项为维度
    metrics:array//	指标		默认columns第二项起为指标
    dataType:object//	数据类型		可选值: KMB, normal, percent
    digit:number//	设置数据类型为percent时保留的位数		默认为2
    label:object//	图形上的文本标签		内容参考文档
    itemStyle:object//	折线拐点标志的样式		内容参考文档
    lineStyle:object//	线条样式		内容参考文档
    areaStyle:object//	区域填充样式		内容参考文档
}
//地图
{
    dimension:string//	维度		默认columns第一项为维度
    metrics:array//	指标		默认columns第二项为指标
    position:string//	位置		默认为 'china'
    selectData:boolean//	是否高亮显示数据对应位置		默认为 false
    selectedMode:	Boolean,String	//	地图选中模式默认为 false, 可选值有'single', 'multiple'
    dataType:object//	指标数据类型		内容为 指标-指标数据类型的键值对，支持'normal', 'KMB', 'percent'
    digit:number//	设置数据类型为percent时保留的位数		默认为2
    zoom:number//	视角的缩放比例		默认为1
    center:array//	当前视角的中心点		-
aspectScale:number//	用于 scale 地图的长宽比		默认为0.75
    boundingCoords:array//	左上角以及右下角分别所对应的经纬度		默认为null
    roam:boolean, string//	是否开启鼠标缩放和平移漫游		默认为false, 可选值有false, true, 'scale', 'move'
    scaleLimit:object//	滚轮缩放的极限控制		默认{ min: 1, max: 1 }
    mapGrid:object//	地图距离容器的边距		默认值为{left: auto,right: auto,top: auto,bottom: auto}
    label:boolean, object//	文本标签		默认为true, 内容参考文档
    itemStyle:boolean, object//	地图区域的多边形 图形样式		默认为true, 内容参考文档
    positionJsonLink:string//	地图数据源		-
beforeRegisterMap:Function//	地图数据注册前执行的函数		参数为地图数据，需返回地图数据
    beforeRegisterMapOnce:Function//	地图数据注册前执行的函数(仅执行一次)		参数为地图数据，需返回地图数据
    specialAreas:object//	地图中的位置配置		将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看, 用法参考文档
    mapURLProfix:string//	位置请求的 URL 前缀		默认为 https://unpkg.com/echarts@3.6.2/map/json/
    mapOrigin:object//	地图 geojson		-
}
//桑基图
{
    dimension:string//	维度		默认columns第一项为维度
    metrics:string//	指标		默认columns第二项为指标
    dataType:array//	数据类型		数组的第一项为item的数据类型，第二项为line的数据类型，可选值: KMB, normal, percent
    links:array//	节点间的关系数据		内容参考文档
    digit:number//	设置数据类型为percent时保留的位数		默认为2
    label:object//	每个矩形节点中文本标签的样式		内容参考文档
    itemStyle:object//	节点矩形的样式		内容参考文档
    lineStyle:object//	桑基图边的样式		内容参考文档
}
//热力图
{
    type:string//	热力图的类型		可选值：cartesian(默认值，直角坐标系), map(地图)，bmap(百度地图)
    xAxisList:array//	x 轴数据		默认取数据中的数据中的第一维度的数据
    yAxisList:array//	y 轴数据		默认取数据中的数据中的第二维度的数据
    dimension:array//	维度		默认为 [columns[0], columns[1]]
    metrics:string//	指标		默认为 columns[2]
    dataType:string//	数据类型		可选值: KMB, normal, percent
    min:	number//visualMap 中的最小值		默认取指标中最小的数据
    max:	number// visualMap中的最大值		默认取指标中最大的数据
    digit:number//	设置数据类型为percent时保留的位数		默认为2
    key:string//	百度地图 access_key		可由此获取
    bmap:object//	百度地图配置项		参考文档配置
    geo:object//	地图配置项		参考文档
    position:string//	地图类型		默认为 'china'
    positionJsonLink:string//	地图数据源		-
beforeRegisterMap:Function//	地图数据注册前执行的函数		参数为地图数据，需返回地图数据
    beforeRegisterMapOnce:Function//	地图数据注册前执行的函数(仅执行一次)		参数为地图数据，需返回地图数据
    specialAreas:object//地图中的位置配置		将地图中的部分区域缩放到合适的位置，可以使得整个地图的显示更加好看, 用法参考文档
    mapURLProfix:string//	位置请求的 URL 前缀		默认为 https://unpkg.com/echarts@3.6.2/map/json/
    pointSize:number//	点大小		默认为 10
    blurSize:number//	模糊大小		默认为 5
    heatColor:array//	visualMap 中的最大值颜色区间		-
yAxisName:string//	y 轴名称		-
xAxisName:string//	x 轴名称		-
}
//散点图
{
    dimension:string//	维度		默认 columns[0]
    metrics:array//	指标		默认 [columns[0], columns[1]]
    dataType:object//	数据类型		-
xAxisType:string//	x轴类型		可选值: category, value, time, log
    xAxisName:string//	x轴标题		-
yAxisName:string//	y轴标题		-
digit:number//	设置数据类型为percent时保留的位数		默认为2
    labelMap:object//	设置指标的别名		-
legendName:object//	设置图表上方图例的别名		-
tooltipTrigger:string//	提示框的触发方式		可选值: item, axis
    axisVisible:boolean//	是否显示坐标轴		-
symbolSizeMax:number//	气泡最大值		默认为50
    symbol:string//	标记的图形		内容参考文档
    symbolSize:number, array, Function//	标记的大小		内容参考文档
    symbolRotate:number//	标记的旋转角度		内容参考文档
    symbolOffset:array//	标记相对于原本位置的偏移		内容参考文档
    cursor:string//	鼠标悬浮时在图形元素上时鼠标的样式		内容参考文档
    scale:boolean	//是否是脱离 0 值比例		-
min:number//	y轴最小值		-
max:number//	y轴最大值		-
}
//K线图
{
    dimension:string//	维度		默认为 columns[0]
    metrics:array//	指标		默认为 [columns[1] ~ columns[5]]
    digit:number//	设置数据类型为percent时保留的位数		默认为2
    itemStyle:object//	图形样式		内容参考文档
    labelMap:object//	设置指标的别名		-
legendName:object//	设置图表上方图例的别名		-
showMA:boolean//	是否展示移动平均线指标		默认 为 false
    MA:array//	移动平均线指标周期		默认 [5, 10, 20, 30]
    showVol:boolean//	是否展示成交量		默认为 false
    downColor:string//	下降颜色		默认为 #ec0000
    upColor:string//	上升颜色		默认为 #00da3c
    showDataZoom:boolean//	是否展示 dataZoom 控件		默认为 false
    start:number//	dataZoom 控件的起始位置		默认为 50，即中间位置
    end	://dataZoom: 控件的结束位置		默认为 100，即末尾位置
    dataType:string//	数据展示格式		可选值: KMB, normal, percent
}
//仪表盘
{
    dimension:string//	维度		默认 columns[0]
    metrics:	string//	指标	默认 columns[1]
    dataType:object//	数据类型		-
digit:number//	设置数据类型为percent时保留的位数		默认为2
    labelMap:object//	设置指标的别名		-
seriesMap:object//	附加到 series 中的设置		-
dataName:object//	表盘上显示的单位		-
}
//树图
{
    dimension:	string//	维度	默认columns第一项为维度
    metrics:string//	指标		默认columns第二项为指标
    seriesMap:object//	附加到 series 中的设置		-
}
//水球图
{
    dimension:	String//	维度	默认 columns[0]
    metrics	:String//指标		默认 columns[1]
    dataType:String//	数据类型		默认为percent,也可设置为normal
    digit:Number//	设置数据类型为percent时保留的位数		默认为2
    wave:Array[Number],Array[Array[Number]]//	设置水球图分层		默认为[], 数组中的值不大于row中对应的维度值，且需要由大到小排列。可设置为[0.3, 0.2, 0.1]的形式，表示每个水球图都显示4层，且最下面三层的值分别为0.1，0.2，0.3；也可设置为[[0.2, 0.1], [0.1], []]的形式，当有多个水球图时，wave中的每一项对应一个水球图的分层设置，如果wave.length < rows.length,则剩余的水球图的分层设置以wave数组中最后一项为准。比如rows=[{val: 0.1}, {val: 0.2}, {val: 0.3}, {val: 0.4}], 而wave=[[0.2,0.1], [0.2]]，此时rows中后三项的分层设置均为[0.2]
    seriesMap:Object,Array[Object]//	附加到 series 中的设置		默认为{}，可以设置单个水球图，也可以一次设置多个。数组形式配置见“多个水球图”示例，对象形式配置见其他示例。
    //seriesMap 配置项
    color:Array[String]//	颜色		data中第一个数据对应color中第一个颜色，以此类推。如果color.length小于data.length, data中数据项的颜色会循环展示。在这里，color设置的是row中metrics和wave的值对应数据波浪的颜色。
radius:String//	水球图的半径		单个水球图的半径，相对于容器元素中较短边(width和height)的长度，以百分数表示,如’50%’
center:Array[String]//	水球图的位置		设置时以百分数表示，数组中第一项代表横坐标，相对于容器的width的百分比，第二项代表纵坐标，相对于容器heigght的百分比。如[’50%’, ’50%’]表示居中
    amplitude:String//	水波的起伏程度		用百分数表示。数值越大，起伏程度越大，如’10%’
waveLength:String//	水波的长度		相对于水球的直径。当为’50%’时，水球图中一条数据上会出现两个水波；为33%时，会出现三个水波。以此类推。
period:Number, Function//	水波滚动的速度		表示滚动一个水波需要花费的时间，以毫秒为单位。可以直接设置数字，也可以设置为function(value, index)的形式。
direction:String//	水波的滚动方向		整体设置水波的滚动方向，可选’left’或’right’
shape:String//	水球图的形状		水球图的形状，可选值有’circle’, ‘rect’, ‘roundRect’, ‘triangle’, ‘diamond’, ‘pin’, ‘arrow’，也可以通过svg自定义’path://*'
    waveAnimation:Boolean//	水波是否滚动		为true时水波滚动，反之不滚动。默认为true
    animationEasing:String//	水波初始的动画的速度曲线		水波初始的动画的速度曲线
    animationEasingUpdate:String//	数据变动时水波动画的速度曲线		数据变动时水波动画的速度曲线
    animationDuration:Number//	水波初始动画所需要的时间		水波初始动画所需要的时间
    animationDurationUpdate	:Number//数据变动时水波动画变化所需要的时间		数据变动时水波动画变化所需要的时间
    outline:Object//	水球图的外边框设置		水球图的外边框设置
    backgroundStyle:Object//	水球图的背景颜色		水球图的背景颜色
    itemStyle:Object//	水球图波浪的样式		水球图波浪的样式
    emphasis:Object//	鼠标悬浮时波浪的样式		鼠标悬浮时波浪的样式
    label:Object//	图形上的文本标签		图形上的文本标签
    //"outline" 水球图外边框配置
    show:Boolean//	是否显示
    borderDistance	:Number//		水球图外边框和水球图核心内容的距离，类似于元素的内边距
    itemStyle:Object//	水球图外边框的样式		主要配置项有color: String(边框和核心内容之间的背景颜色，也就是borderDistance那部分的背景颜色), borderColor: String(外边框的颜色)，borderWidth: Number(外边框的宽度)，shadowBlur: Number(外边阴影的模糊距离)，shadowColor: String(边框阴影的颜色)
//"backgroundStyle" 配置
    color:String//	水球图的背景颜色
    borderWidth:Number//	背景的边框
    borderColor:String//	背景边框的颜色
    //"itemStyle" 配置
    opacity	:Number//波浪的透明度
    shadowBlur:Number//	波浪阴影的模糊距离
    shadowColor	:String//波浪阴影的颜色
    //"emphasis" 配置
    itemStyle:Object//	鼠标悬浮时波浪的样式		opacity: Number(鼠标悬浮时波浪的透明度)
    //"label" 配置
    show:	Boolean//	是否显示	默认显示
    color:String//	文本的颜色
    insideColor:String//	被波浪覆盖部分的文本的颜色
    fontWeight:String//	文本的字重
    fontSize:Number//	字号
    formatter:Function//	自定义文字标签内容
    align:String//	文本的位置		可选值有'left', 'center', 'right
    baseline:String//	文本垂直方向上对齐方向		可选值有'top', 'middle', 'bottom'
    position:String, Array[string]//	文本的位置		有inside, left, right, top, bottom可选，也可设置为[’10%’, ’20%’]形式表示水平和垂直方向的位置
}
//词云图
{
    dimension:String//	维度		默认 columns[0]
    metrics:String//	指标		默认 columns[1]
    sizeMin:Number//	最小字体大小		默认为 12
    sizeMax	:Number//最大字体大小		默认为 60
    shape:String//	词云图的形状		默认为 circle，可选值见备注
    color:Array[String], String, Function//	词云图字体颜色		默认为 "rgb(Math.round(Math.random * 160), Math.round(Math.random * 160), Math.round(Math.random * 160))"
}