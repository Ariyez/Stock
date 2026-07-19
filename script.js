// API KEY AND SHEET ID
const API_KEY = "AIzaSyB5-DJ8TNb1DoxfC6LNoecM7YMo8g1yS1I";
const SHEET_ID = "1vhPPwpeFsQwSWBhJXIzVmEwI_3ZxdwCIrwWBmDzPbfY";

// RANK ALLTYPE
async function loadRankAlltype() {
  const range = "'Top Rank'!D51:F58";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const container = document.getElementById("cont-alltype");
  const foto = document.getElementById("pic-alltype");

  data.values.forEach((row, idx) => {
    const block = document.createElement("div");
    block.className = "alltype";

    const pRank = document.createElement("p");
    pRank.textContent = row[0];
    block.appendChild(pRank);

    const pName = document.createElement("p");
    pName.textContent = row[1];
    block.appendChild(pName);

    const pUnit = document.createElement("p");
    pUnit.textContent = row[2];
    block.appendChild(pUnit);

    container.appendChild(block);

    if (idx === 0) {
      foto.src = `img/${row[1].toLowerCase()}.png`;
    }
  });
}

loadRankAlltype();

// RANK REVENUE
async function loadRankRevenue() {
  const range = "'Top Rank'!A51:C58";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const container = document.getElementById("cont-revenue");
  const foto = document.getElementById("pic-revenue");

  data.values.forEach((row, idx) => {
    const block = document.createElement("div");
    block.className = "revenue";

    const pRank = document.createElement("p");
    pRank.textContent = row[0];
    block.appendChild(pRank);

    const pName = document.createElement("p");
    pName.textContent = row[1];
    block.appendChild(pName);

    const pUnit = document.createElement("p");
    pUnit.textContent = row[2];
    block.appendChild(pUnit);

    container.appendChild(block);

    if (idx === 0) {
      foto.src = `img/${row[1].toLowerCase()}.png`;
    }
  });
}

loadRankRevenue();

// RANK PROFOK
async function loadRankProfok() {
  const range = "'Top Rank'!A69:C76";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const container = document.getElementById("cont-profok");
  const foto = document.getElementById("pic-profok");

  data.values.forEach((row, idx) => {
    const block = document.createElement("div");
    block.className = "profok";

    const pRank = document.createElement("p");
    pRank.textContent = row[0];
    block.appendChild(pRank);

    const pName = document.createElement("p");
    pName.textContent = row[1];
    block.appendChild(pName);

    const pUnit = document.createElement("p");
    pUnit.textContent = row[2];
    block.appendChild(pUnit);

    container.appendChild(block);

    if (idx === 0) {
      foto.src = `img/${row[1].toLowerCase()}.png`;
    }
  });
}

loadRankProfok();

// RANK QOALA
async function loadRankQoala() {
  const range = "'Top Rank'!D69:F76";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const container = document.getElementById("cont-qoala");
  const foto = document.getElementById("pic-qoala");

  data.values.forEach((row, idx) => {
    const block = document.createElement("div");
    block.className = "qoala";

    const pRank = document.createElement("p");
    pRank.textContent = row[0];
    block.appendChild(pRank);

    const pName = document.createElement("p");
    pName.textContent = row[1];
    block.appendChild(pName);

    const pUnit = document.createElement("p");
    pUnit.textContent = row[2];
    block.appendChild(pUnit);

    container.appendChild(block);

    if (idx === 0) {
      foto.src = `img/${row[1].toLowerCase()}.png`;
    }
  });
}

loadRankQoala();

// RANK ACC
async function loadRankAcc() {
  const range = "'Top Rank'!A87:C94";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const container = document.getElementById("cont-acc");
  const foto = document.getElementById("pic-acc");

  data.values.forEach((row, idx) => {
    const block = document.createElement("div");
    block.className = "acc";

    const pRank = document.createElement("p");
    pRank.textContent = row[0];
    block.appendChild(pRank);

    const pName = document.createElement("p");
    pName.textContent = row[1];
    block.appendChild(pName);

    const pUnit = document.createElement("p");
    pUnit.textContent = row[2];
    block.appendChild(pUnit);

    container.appendChild(block);

    if (idx === 0) {
      foto.src = `img/${row[1].toLowerCase()}.png`;
    }
  });
}

loadRankAcc();

// RANK PERFORM
async function loadRankPerform() {
  const range = "'Top Rank'!A133:C140";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const container = document.getElementById("cont-perform");
  const foto = document.getElementById("pic-perform");

  data.values.forEach((row, idx) => {
    const block = document.createElement("div");
    block.className = "perform";

    const pRank = document.createElement("p");
    pRank.textContent = row[0];
    block.appendChild(pRank);

    const pName = document.createElement("p");
    pName.textContent = row[1];
    block.appendChild(pName);

    const pUnit = document.createElement("p");
    pUnit.textContent = row[2];
    block.appendChild(pUnit);

    container.appendChild(block);

    if (idx === 0) {
      foto.src = `img/${row[1].toLowerCase()}.png`;
    }
  });
}

loadRankPerform();

// STOCKAN SERIES
const seriesToneMap = {
  y05: {
    black: "dark",
    blue: "light",
  },
  y11d: {
    black: "dark",
    platinum: "light",
  },
  y31d: {
    grey: "dark",
    white: "light",
  },
  y500: {
    blue: "dark",
    white: "light",
  },
  v60lite: {
    black: "dark",
    blue: "light",
    pink: "light",
  },
  v70fe: {
    blue: "dark",
    silver: "light",
    purple: "light",
  },
  v70: {
    brown: "dark",
    gray: "light",
    gold: "light",
  },
  x300: {
    black: "dark",
    black2: "dark",
    black3: "dark",
    blue: "light",
    pink: "light",
    brown: "light",
    white: "light",
    green: "light",
  },
  iqz11: {
    black: "dark",
    black: "dark",
    blue: "light",
  },
  iq15: {
    black: "dark",
    silver: "light",
    alpha: "dark",
    legend: "light",
  },
};

function getTone(seriesId, colorName) {
  const lower = colorName.toLowerCase().replace(/\s+/g, "-");
  const tone = seriesToneMap[seriesId]?.[lower];
  return tone || "light";
}

async function loadSheet(range, tableId) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${range}?key=${API_KEY}`;

  const res = await fetch(url);
  const data = await res.json();
  const tbody = document.querySelector(`#${tableId} tbody`);

  let memoryGroups = {};
  data.values.slice(1).forEach((row) => {
    const [memory, srp, color, stock, sellout] = row;
    if (!memoryGroups[memory]) memoryGroups[memory] = {};
    if (!memoryGroups[memory][srp]) memoryGroups[memory][srp] = [];
    memoryGroups[memory][srp].push({ color, stock, sellout });
  });

  Object.entries(memoryGroups).forEach(([memory, srpGroup]) => {
    let memoryAdded = false;
    const totalRows = Object.values(srpGroup).reduce(
      (sum, arr) => sum + arr.length,
      0,
    );

    Object.entries(srpGroup).forEach(([srp, rows]) => {
      rows.forEach((r, idx) => {
        const tr = document.createElement("tr");

        const colorKey = r.color.toLowerCase().replace(/\s+/g, "-");
        tr.dataset.color = colorKey;
        tr.dataset.tone = getTone(tableId, r.color);

        if (!memoryAdded) {
          const tdMemory = document.createElement("td");
          tdMemory.textContent = memory;
          tdMemory.rowSpan = totalRows;
          tdMemory.classList.add("memory");
          tr.appendChild(tdMemory);
          memoryAdded = true;
        }

        if (idx === 0) {
          const tdSrp = document.createElement("td");
          tdSrp.textContent = srp;
          tdSrp.classList.add("srp");
          tdSrp.rowSpan = rows.length;
          tr.appendChild(tdSrp);
        }

        const tdColor = document.createElement("td");
        tdColor.textContent = r.color;
        tdColor.classList.add("color");
        tr.appendChild(tdColor);

        const tdStock = document.createElement("td");
        tdStock.textContent = r.stock;
        tdStock.classList.add("stock");
        tr.appendChild(tdStock);

        const tdSellout = document.createElement("td");
        tdSellout.textContent = r.sellout;
        tdSellout.classList.add("sellout");
        tr.appendChild(tdSellout);

        tbody.appendChild(tr);
      });
    });
  });
}

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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => console.log("Service Worker registered"));
}

function isValidRow(row) {
  const RANGE = "Marquee!A:B";
  const colB = row[1] || "";
  return (
    colB.trim() !== "" &&
    !colB.includes("AS07") &&
    !colB.includes("VAST") &&
    !colB.includes("VCARE12") &&
    !/^IMOO/.test(colB) &&
    !/^Q/.test(colB)
  );
}

async function getRows() {
  const RANGE = "Marquee!A:B";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.values;
}

async function runMarquee() {
  const rows = await getRows();
  const container = document.getElementById("scrollText");

  const headerRow = `${rows[0][0]} - ${rows[0][1]}`;
  const dataRows = rows.slice(1).filter(isValidRow);
  const displayRows = [headerRow, ...dataRows.map((r) => `${r[0]} - ${r[1]}`)];

  let index = 0;
  function showRow() {
    if (index >= displayRows.length) index = 0;

    container.textContent = displayRows[index];
    index++;

    container.classList.remove("animate");
    void container.offsetWidth;
    container.classList.add("animate");
    setTimeout(showRow, 3000);
  }
  showRow();
}
runMarquee();

async function getSheetData() {
  const RANGE = "users!A1:B";
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
  const response = await fetch(url);
  const data = await response.json();
  return data.values; // array of rows
}

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;
  const message = document.getElementById("message");

  try {
    const rows = await getSheetData();

    // baris pertama biasanya header, jadi mulai dari index 1
    const valid = rows.some(
      (row) => row[0] === inputUsername && row[1] === inputPassword,
    );

    if (valid) {
      window.location.href = "/dashboard/dashboard.html";
    } else {
      message.textContent = "Username atau password salah.";
      message.style.color = "red";
    }
  } catch (err) {
    message.textContent = "Terjadi error saat mengakses data.";
    message.style.color = "red";
    console.error(err);
  }
});
