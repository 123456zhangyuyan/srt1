document.addEventListener("DOMContentLoaded", function() {
  // 知识图谱数据
  window.kgData = {
nodes: {
    "稻": { name: "稻", type: "plant",description: "一年生水生草本，是全球重要的粮食作物，为人类提供主要的淀粉来源。"},
    "稌": { name: "稌", type: "plant", imageUrl: "图片/先秦植物/稌.png",description: "稻（糯稻）,一年生水生草本，是重要的粮食作物，颖果富含淀粉，口感软糯，可制作糕点、酿酒等。" },
    "禾": { name: "禾", type: "plant", imageUrl: "图片/先秦植物/禾.png",description: "谷类作物统称（如稻、黍、稷、麦、菽等）,是人类重要的粮食来源，不同谷类作物在形态、生长环境等方面存在差异。" },
    "白稻": { name: "白稻", type: "plant", imageUrl: "图片/先秦植物/白稻.png",description: "水稻,指水稻，是重要的粮食作物，是全球一半以上人口的主食。" },
    "一年生": { name: "一年生", type: "time"},
    "水生": { name: "水生", type: "place"},
    "草本植物": { name: "草本植物", type: "category"},
    "稻属": { name: "稻属", type: "genus"},
    "禾本科": { name: "禾本科", type: "family"},
    "木兰纲": { name: "木兰纲", type: "class"},
    "直立状": { name: "直立状", type: "shape"},
    "松弛无毛": { name: "松弛无毛", type: "shape"},
    "披针形": { name: "披针形", type: "shape"},
    "镰形抱茎": { name: "镰形抱茎", type: "shape"},
    "线状披针形": { name: "线状披针形", type: "shape"},
    "颖果": { name: "颖果", type: "part"},
    "向下弯垂": { name: "向下弯垂", type: "shape"},
    "6 - 8月": { name: "6 - 8月", type: "time"},
    "10 - 11月": { name: "10 - 11月", type: "time"},
    "水田": { name: "水田", type: "place"}
    },
    links: [
    { source: "稻", target: "稌", rela: "类别", type: "literature" },
    { source: "稻", target: "禾", rela: "类别", type: "literature" },
    { source: "稻", target: "白稻", rela: "类别", type: "literature" },
    { source: "稻", target: "一年生", rela: "生长周期", type: "literature" },
    { source: "稻", target: "水生", rela: "生长环境", type: "literature" },
    { source: "稻", target: "草本植物", rela: "植物种类", type: "literature" },
    { source: "稻", target: "稻属", rela: "属于", type: "literature" },
    { source: "稻", target: "禾本科", rela: "属于", type: "literature" },
    { source: "稻", target: "木兰纲", rela: "属于", type: "literature" },
    { source: "稻", target: "直立状", rela: "茎", type: "literature" },
    { source: "稻", target: "松弛无毛", rela: "叶鞘", type: "literature" },
    { source: "稻", target: "披针形", rela: "叶舌", type: "literature" },
    { source: "稻", target: "镰形抱茎", rela: "叶耳", type: "literature" },
    { source: "稻", target: "线状披针形", rela: "叶片", type: "literature" },
    { source: "稻", target: "颖果", rela: "可食用", type: "literature" },
    { source: "稻", target: "向下弯垂", rela: "花序", type: "literature" },
    { source: "稻", target: "6 - 8月", rela: "花期", type: "literature" },
    { source: "稻", target: "10 - 11月", rela: "果期", type: "literature" },
    { source: "稻", target: "水田", rela: "生长环境", type: "literature" }
    ]
  };

// 配置项
const config = {
    width: 1000,
    height: 600,
    nodeColor: [
      { fill: "rgb(249, 235, 249)", stroke: "rgb(162, 84, 162)", text: "rgb(162, 84, 162)" },
      { fill: "rgb(178, 229, 183)", stroke: "rgb(98, 182, 105)", text: "rgb(60, 60, 60)" },
      { fill: "rgb(112, 202, 225)", stroke: "#23b3d7", text: "rgb(93, 76, 93)" },
      { fill: "#D9C8AE", stroke: "#c0a378", text: "rgb(60, 60, 60)" }
    ],
    linkColor: [
      { color: "rgb(162, 84, 162)" },
      { color: "rgb(98, 182, 105)" },
      { color: "#23b3d7" }
    ],
    contentHook: d => `
      <strong>${d.name}</strong><br>
      类型：${d.type}<br>
      ${d.description ? d.description : ''}
    `
  };

  // 初始化知识图谱
  initKG(kgData, config, "#kg-container");

  // 初始化搜索功能
  initSearch();
});

function initKG(data, config, container) {
  const nodeDict = data.nodes;
  const links = data.links;
  const nodes = {};

  // 构建节点映射关系
  links.forEach(link => {
    if (!nodeDict[link.source] || !nodeDict[link.target]) {
      console.error("节点未定义:", link.source, link.target);
      return;
    }

    link.source = nodeDict[link.source];
    nodes[link.source.name] = link.source;
    link.target = nodeDict[link.target];
    nodes[link.target.name] = link.target;
  });

  if (Object.keys(nodes).length === 0) {
    console.error("未找到有效节点");
    return;
  }

  // 默认配色方案
  const defaultNodeColor = config.nodeColor || [
    { fill: "rgb(249, 235, 249)", stroke: "rgb(162, 84, 162)", text: "rgb(162, 84, 162)" },
    { fill: "#ccc", stroke: "rgb(145, 138, 138)", text: "#333" },
    { fill: "rgb(112, 202, 225)", stroke: "#23b3d7", text: "rgb(93, 76, 93)" }
  ];

  const defaultLinkColor = config.linkColor || [
    { color: "rgb(162, 84, 162)" },
    { color: "rgb(145, 138, 138)" },
    { color: "#23b3d7" }
  ];

  // 分配节点颜色
  const colorDict = {};
  let point = 0;
  Object.keys(data.nodes).forEach(key => {
    const type = data.nodes[key].type || "default";
    if (!colorDict[type]) {
      colorDict[type] = defaultNodeColor[point];
      point = (point + 1) % defaultNodeColor.length;
    }
  });

  // 分配连线颜色
  const colorLinkDict = {};
  point = 0;
  links.forEach(link => {
    const type = link.type || "default";
    if (!colorLinkDict[type]) {
      colorLinkDict[type] = defaultLinkColor[point];
      point = (point + 1) % defaultLinkColor.length;
    }
  });

  // 动态获取父容器尺寸
  const parentContainer = d3.select(container).node();
  const width = parentContainer.clientWidth || config.width || 1000;
  const height = parentContainer.clientHeight || config.height || 650;

  // 力导向布局配置
  const force = d3.layout.force()
    .nodes(d3.values(nodes))
    .links(links)
    .size([width, height])
    .linkDistance(120)
    .charge(-1200)
    .on("tick", tick)
    .start();

  // 缩放行为
  const zoom = d3.behavior.zoom()
    .scaleExtent([0, 2])
    .on("zoom", zoomed);

  // 创建SVG容器
  const svg = d3.select(container).append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(zoom);

  // 箭头定义
  svg.append("marker")
    .attr("id", "resolved")
    .attr("markerUnits", "userSpaceOnUse")
    .attr("viewBox", "0 -5 10 10")
    .attr("refX", 35)
    .attr("refY", 0)
    .attr("markerWidth", 12)
    .attr("markerHeight", 12)
    .attr("orient", "auto")
    .append("path")
    .attr("d", "M0,-5L10,0L0,5")
    .attr('fill', '#000');

  // 绘制连线
  const edges_line = svg.append("g").selectAll(".edgepath")
    .data(force.links())
    .enter().append("path")
    .attr({
      'class': 'edgepath',
      'id': (d, i) => 'edgepath' + i
    })
    .style("stroke", d => {
      const type = d.type || "default";
      return colorLinkDict[type] ? colorLinkDict[type].color : "#ccc";
    })
    .style("stroke-width", 1)
    .attr("marker-end", "url(#resolved)");

  // 连线文字
  const edges_text = svg.append("g").selectAll(".edgelabel")
    .data(force.links())
    .enter().append("text")
    .attr({
      'class': 'edgelabel',
      'id': (d, i) => 'edgepath' + i,
      'dx': 30,
      'dy': 0
    });

  edges_text.append('textPath')
    .attr('xlink:href', (d, i) => '#edgepath' + i)
    .style('text-anchor', 'middle')  // 文字居中
    .attr('startOffset', '35%') 
    .text(d => d.rela);

  // 拖拽交互
  const drag = force.drag()
    .on("dragstart", function(d) {
      d3.event.sourceEvent.stopPropagation();
    });

  // 创建图片提示框
  const imageTooltip = d3.select("body").append("div")
    .attr("class", "kg-image-tooltip")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("background", "white")
    .style("border", "1px solid #ddd")
    .style("padding", "10px")
    .style("border-radius", "5px")
    .style("max-width", "300px")
    .style("z-index", "1000")
    .style("box-shadow", "0 0 10px rgba(0,0,0,0.2)");

  // 创建普通提示框
  const textTooltip = d3.select("body").append("div")
    .attr("class", "kg-text-tooltip")
    .style("opacity", 0)
    .style("position", "absolute")
    .style("background", "white")
    .style("border", "1px solid #ddd")
    .style("padding", "10px")
    .style("border-radius", "5px")
    .style("max-width", "200px")
    .style("z-index", "1000");

  // 绘制节点
  const circle = svg.append("g").selectAll("circle")
    .data(force.nodes())
    .enter().append("circle")
    .attr("r", 30)
    .style("fill", d => colorDict[d.type].fill)
    .style("stroke", d => colorDict[d.type].stroke)
    .on("click", handleNodeClick)
    .on("dblclick", d => d.fixed = false)
    .on("mouseover", showTextTooltip)
    .on("mousemove", moveTooltip)
    .on("mouseout", hideTextTooltip)
    .call(drag);

  // 节点文字
  const text = svg.append("g").selectAll("text")
    .data(force.nodes())
    .enter().append("text")
    .attr("dy", ".35em")
    .attr("text-anchor", "middle")
    .style("fill", d => colorDict[d.type].text)
    .text(d => formatText(d.name));

  // 动态布局更新
  function tick() {
    if (!circle) return;
    circle.attr("transform", d => `translate(${d.x},${d.y})`);
    text.attr("transform", d => `translate(${d.x},${d.y})`);
    edges_line.attr('d', d => `M ${d.source.x} ${d.source.y} L ${d.target.x} ${d.target.y}`);
  }

  // 缩放函数
  function zoomed() {
    svg.selectAll("g").attr("transform", `translate(${d3.event.translate})scale(${d3.event.scale})`);
  }

  // 节点点击处理函数
  function handleNodeClick(node) {
    d3.event.stopPropagation();
    
    // 高亮相关节点和边
    edges_line.style("stroke-width", line => 
      (line.source === node || line.target === node) && line.focus ? 2.5 : 1
    );
    node.focus = !node.focus;
    circle.style("stroke-width", d => d.focus ? 2.5 : 1);
    
    // 显示图片提示框
    if (node.imageUrl) {
      const tooltipContent = `
        <div class="tooltip-header">
          <h4>${node.name}</h4>
          <small>类型: ${node.type}</small>
        </div>
        <div class="tooltip-image-container">
          <img src="${node.imageUrl}" alt="${node.name}" 
               onerror="this.src='https://via.placeholder.com/300x200?text=图片加载失败'">
        </div>
        ${node.description ? `<div class="tooltip-description">${node.description}</div>` : ''}
      `;
      
      imageTooltip.html(tooltipContent)
        .style("left", `${d3.event.pageX + 15}px`)
        .style("top", `${d3.event.pageY + 15}px`)
        .transition()
        .duration(200)
        .style("opacity", 1);
    }
  }

  // 文本提示框函数
  function showTextTooltip(d) {
    if (!d.imageUrl) {
      textTooltip.html(config.contentHook ? config.contentHook(d) : `<strong>${d.name}</strong><br>类型：${d.type}`)
        .style("left", `${d3.event.pageX}px`)
        .style("top", `${d3.event.pageY + 20}px`)
        .style("opacity", 0.9);
    }
  }

  function moveTooltip() {
    const tooltip = d3.select(".kg-image-tooltip").style("opacity") > 0 ? imageTooltip : textTooltip;
    tooltip.style("left", `${d3.event.pageX}px`)
      .style("top", `${d3.event.pageY + 20}px`);
  }

  function hideTextTooltip() {
    textTooltip.transition()
      .duration(500)
      .style("opacity", 0);
  }

  // 文本格式化函数
  function formatText(name) {
    if (name.length <= 8) return name;
    const top = name.substring(0, 8);
    const bot = name.substring(8, 14) + (name.length > 16 ? "..." : "");
    return `${top}\n${bot}`;
  }

  // 点击页面其他位置关闭图片提示框
  d3.select("body").on("click", function() {
    if (d3.event.target.tagName !== "circle") {
      imageTooltip.transition()
        .duration(500)
        .style("opacity", 0);
    }
  });
}

// 搜索功能初始化
function initSearch() {
  document.getElementById('search-btn').addEventListener('click', search);
  document.getElementById('search-input').addEventListener('input', search);
  document.getElementById('type-filter').addEventListener('change', filterNodes);
}

// 搜索函数
function search() {
  const query = document.getElementById('search-input').value.toLowerCase();
  const results = Object.values(kgData.nodes).filter(node => 
    node.name.toLowerCase().includes(query)
  );
  displayResults(results);
}

// 节点过滤函数
function filterNodes() {
  const type = document.getElementById('type-filter').value;
  const filtered = type ? 
    Object.values(kgData.nodes).filter(node => node.type === type) : 
    Object.values(kgData.nodes);
  displayResults(filtered);
}

// 结果显示函数
function displayResults(results) {
  const container = document.getElementById('results');
  container.innerHTML = results.map(node => `
    <div class="result-item" data-id="${node.name}" 
         onmouseover="highlightNode('${node.name}')" 
         onmouseout="unhighlightNode('${node.name}')"
         onclick="focusNode('${node.name}')">
      <strong>${node.name}</strong><br>
      <small>类型：${node.type}</small><br>
      <small>简介：${node.description}</small>
    </div>
  `).join('');
}

// 节点高亮函数
function highlightNode(nodeName) {
  d3.selectAll("circle").style("stroke-width", d => 
    d.name === nodeName ? "2.5px" : "1px"
  );
}

function unhighlightNode(nodeName) {
  d3.selectAll("circle").style("stroke-width", "1px");
}

function focusNode(nodeName) {
  const node = kgData.nodes[nodeName];
  if (node) {
    // 模拟点击事件来触发图片显示
    const circle = d3.select(`circle[data-name="${nodeName}"]`);
    if (!circle.empty()) {
      circle.dispatch("click");
    }
  }
}
