// Tone mapping manual per seri
const seriesToneMap = {
  y05: {
    "black": "dark",
    "blue": "light"
  },
  y11d: {
    "black": "dark",
    "platinum": "light"
  },
  y31d: {
    "grey": "dark",
    "white": "light"
  },
  y500: {
    "blue": "dark",
    "white": "light"
  },
  v60lite: {
    "black": "dark",
    "blue": "light",
    "pink": "light"
  },
  v70fe: {
    "blue": "dark",
    "silver": "light",
    "purple": "light",
  },
  v70: {
    "brown": "dark",
    "gray": "light",
    "gold": "light",
  },
  x300: {
    "black": "dark",
    "black2": "dark",
    "black3": "dark",
    "blue": "light",
    "pink": "light",
    "brown": "light",
    "white": "light",
    "green": "light",
  },
  iqz11: {
    "black": "dark",
    "black": "dark",
    "blue": "light",
  },
  iq15: {
    "black": "dark",
    "silver": "light",
    "alpha": "dark",
    "legend": "light",
  }
};

// Ambil tone berdasarkan seri + warna
function getTone(seriesId, colorName){
  const lower = colorName.toLowerCase().replace(/\s+/g, "-"); // ganti spasi jadi "-"
  const tone = seriesToneMap[seriesId]?.[lower];
  return tone || "light"; // default jika tidak ada mapping
}

async function loadSheet(range, tableId) {
  const sheetId = "1vhPPwpeFsQwSWBhJXIzVmEwI_3ZxdwCIrwWBmDzPbfY"; // ID sheet
  const apiKey = "AIzaSyB5-DJ8TNb1DoxfC6LNoecM7YMo8g1yS1I";       // API key
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
  
  const res = await fetch(url);
  const data = await res.json();
  const tbody = document.querySelector(`#${tableId} tbody`);

  // Grouping berdasarkan Memory lalu SRP
  let memoryGroups = {};
  data.values.slice(1).forEach(row => {
    const [memory, srp, color, stock, sellout] = row;
    if (!memoryGroups[memory]) memoryGroups[memory] = {};
    if (!memoryGroups[memory][srp]) memoryGroups[memory][srp] = [];
    memoryGroups[memory][srp].push({color, stock, sellout});
  });

  // Render tabel
  Object.entries(memoryGroups).forEach(([memory, srpGroup]) => {
    let memoryAdded = false; // flag
    const totalRows = Object.values(srpGroup).reduce((sum, arr) => sum + arr.length, 0);

    Object.entries(srpGroup).forEach(([srp, rows]) => {
      rows.forEach((r, idx) => {
        const tr = document.createElement("tr");

        // Tambahkan data-color & data-tone di <tr>
        const colorKey = r.color.toLowerCase().replace(/\s+/g, "-");
        tr.dataset.color = colorKey;
        tr.dataset.tone  = getTone(tableId, r.color);

        // Memory cell (sekali saja)
        if (!memoryAdded) {
          const tdMemory = document.createElement("td");
          tdMemory.textContent = memory;
          tdMemory.rowSpan = totalRows;
          tdMemory.classList.add("memory");
          tr.appendChild(tdMemory);
          memoryAdded = true;
        }

        // SRP cell (sekali per SRP)
        if (idx === 0) {
          const tdSrp = document.createElement("td");
          tdSrp.textContent = srp;
          tdSrp.classList.add("srp");
          tdSrp.rowSpan = rows.length;
          tr.appendChild(tdSrp);
        }

        // Color
        const tdColor = document.createElement("td");
        tdColor.textContent = r.color;
        tdColor.classList.add("color");
        tr.appendChild(tdColor);

        // Stock
        const tdStock = document.createElement("td");
        tdStock.textContent = r.stock;
        tdStock.classList.add("stock");
        tr.appendChild(tdStock);

        // Sellout
        const tdSellout = document.createElement("td");
        tdSellout.textContent = r.sellout;
        tdSellout.classList.add("sellout");
        tr.appendChild(tdSellout);

        tbody.appendChild(tr);
      });
    });
  });
}

// Load semua tab
loadSheet("Y05!A1:E", "y05");
loadSheet("Y11D!A1:E", "y11d");
loadSheet("Y31D!A1:E", "y31d");
loadSheet("Y500!A1:E", "y500");
loadSheet("'V60 LITE'!A1:E", "v60lite");
loadSheet("'V70 FE'!A1:E", "v70fe");
loadSheet("V70!A1:E", "v70");
loadSheet("X300!A1:E", "x300");
loadSheet("Z11!A1:E", "iqz11");
loadSheet("15!A1:E", "iq15");
