(function () {
  var id = document.body.getAttribute("data-product");
  var p = PRODUCTS[id];
  if (!p) return;

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }
  function value(v) {
    var isTbc = /待补充|TBC|待上传|To be uploaded|待填写/.test(v);
    return isTbc ? '<span class="tbc">' + esc(v) + "</span>" : esc(v);
  }

  document.title = p.model + " · " + SITE.brand;
  document.getElementById("brand").textContent = SITE.brand;
  document.getElementById("brand-sub").textContent = SITE.brandSub;
  document.getElementById("model").textContent = p.model;
  document.getElementById("pname").textContent = p.name;

  var b = p.battery;
  document.getElementById("battery").innerHTML = [
    ["化学体系 / Chemistry", b.chemistry],
    ["标称电压 / Nominal voltage", b.nominalVoltage],
    ["额定容量 / Capacity", b.capacity],
    ["电芯数量 / Cell count", b.cellCount],
    ["电芯制造商 / Cell manufacturer", b.manufacturer],
    ["生产日期 / Production date", b.productionDate],
    ["批号 / Batch No.", b.batch, true]
  ].map(function (x) {
    return '<div class="item' + (x[2] ? " min" : "") + '">' +
      '<div class="k">' + esc(x[0]) + '</div><div class="v">' + value(x[1]) + "</div></div>";
  }).join("");

  document.getElementById("compliance").innerHTML = p.compliance.map(function (c) {
    var ok = !/待上传|To be uploaded/.test(c.value);
    return '<div class="row"><span>' + esc(c.label) + '</span>' +
      '<span class="tag' + (ok ? " ok" : "") + '">' + value(c.value) + "</span></div>";
  }).join("");

  var docs = document.getElementById("docs");
  if (p.documents && p.documents.length) {
    docs.innerHTML = p.documents.map(function (d) {
      return '<div class="doc"><a href="' + esc(d.url) + '" target="_blank" rel="noopener">' +
        "<span>" + esc(d.title) + "</span><span>下载 / Open &rarr;</span></a></div>";
    }).join("");
  } else {
    docs.innerHTML = '<div class="doc-empty">法规文件待上传后在此提供下载链接。/ Documents will be available here once uploaded.</div>';
  }

  document.getElementById("safety").innerHTML = p.safety.map(function (s) {
    return "<li>" + esc(s) + "</li>";
  }).join("");

  document.getElementById("mfg-name").textContent = p.manufacturer.name;
  document.getElementById("mfg-addr").textContent = p.manufacturer.address;
  document.getElementById("mfg-contact").textContent = p.manufacturer.contact;
  document.getElementById("disposal").textContent = p.disposal;
  document.getElementById("review").textContent = SITE.lastReview;
  document.getElementById("footer-note").textContent = SITE.footerNote;
})();
