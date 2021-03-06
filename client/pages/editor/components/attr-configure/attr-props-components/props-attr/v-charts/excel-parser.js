/**
 *
 declare module ExcelRows {
  export interface cell {
      text: string;
  }
  export interface Cells {
    0: cell;
    1: cell;
    2: cell;
  }
  export interface ExcelRows {
    cells: Cells;
  }
}
 */

/**
  *
  BinaryMatrix = [
    [any, any, any, ...],
    [any, any, any, ...],
    [any, any, any, ...],
  ]

  ExcelDataType = [
    {
      cells: {
        0: { text: any },
        1: { text: any },
        2: { text: any }
      }
    },
    {
      cells: {
        0: { text: any },
        1: { text: any },
        2: { text: any }
      }
    },
  ]
  */

export default class Parser {
  /**
   *
   * @param {*} dataset ExcelDataType
   */
  static dataset2excel (dataset) {
    return dataset.map(item => ({
      cells: {
        0: { text: item.x },
        1: { text: item.y },
        2: { text: item.s }
      }
    }))
  }

  /**
   *
    [
      [1,2,3,4],
      [5,6,7,8],
      [9,10,11,12]
    ]
   * @param {Object} BinaryMatrix
   * @returns {Object} ExcelDataType
   */
  static binaryMatrix2excel (binaryMatrix) {
    const excelData = binaryMatrix.map((row, rowIndex) => {
      // cells: {
      //   0: { text: item.x },
      //   1: { text: item.y },
      //   2: { text: item.s }
      // }
      const cells = {}
      row.forEach((cellValue, cellIndex) => {
        cells[cellIndex] = { text: cellValue }
      })
      return { cells }
    })
    return excelData
  }

  static excel2chartDataSet (excelData) {
    const rowsArray = Object.values(excelData.rows).filter(item => typeof item === 'object')
    const dataset = rowsArray.map(row => {
      const [x, y, s] = Object.values(row.cells).map(item => item.text)
      return {
        x: x,
        y: y,
        s: s
      }
    })
    return dataset
  }

  static excel2BinaryMatrix (excelData) {
    const rowsArray = Object.values(excelData.rows).filter(item => typeof item === 'object')
    const dataset = rowsArray.map(row => {
      // [1,2,3,4]
      const cells = Object.values(row.cells).map(item => item.text)
      return cells
    })
    console.log('dataset', dataset)
    return dataset
  }

  /**
  *
  * @param {Array} csvArray
  *    [
         ['??????', '?????????'],
         ["1???1???",123],
         ["1???2???",1223],
         ["1???3???",2123],
         ["1???4???",4123],
         ["1???5???",3123],
         ["1???6???",7123]
       ]
  * @returns {Object}
     {
       columns: ['??????', '?????????'],
       rows:[
         { '??????': '1???1???', '?????????': 123 },
         { '??????': '1???2???', '?????????': 1223 },
         { '??????': '1???3???', '?????????': 2123 },
         { '??????': '1???4???', '?????????': 4123 },
         { '??????': '1???5???', '?????????': 3123 },
         { '??????': '1???6???', '?????????': 7123 }
       ]
     }
  */
  static csv2VChartJson (csvArray) {
    const columns = csvArray[0]
    const rows = csvArray.slice(1)
    const json = {
      columns,
      rows: rows.map((row, index) => {
        const obj = {}
        columns.forEach((col, colIndex) => {
          obj[col.trim()] = row[colIndex]
        })
        return obj
      })
    }
    return json
  }

  static csv2List(data) {
    let dataset = data;
    let datalist = [];
    for (let val in dataset) {
      if (val != "len") {
        datalist.push(dataset[val]["cells"]);
      }
    }
    let dlist = [];
    for (let f in datalist) {
      let t = [];
      for (let s in datalist[f]) {
        t.push(datalist[f][s]["text"]);
      }
      dlist.push(t);
    }
    return dlist;
  }

  static vChartJson2Csv(rowsV, closV) {
    let row = rowsV.map((item) => {
      const cells = {};
      let index = 0;
      for (let i in item) {
        cells[index] = { text: item[i] };
        index++;
      }
      return cells;
    });
    const cols = {};
    for (let i in closV) {
      cols[i] = { text: closV[i] };
    }
    const rows = {};
    for (let a = 1; a <= row.length; a++) {
      rows[a] = { cells: row[a - 1] };
    }
    let col = { 0: { cells: cols } };
    let dat = Object.assign(rows, col);
    let data = { rows: dat, cols: { len: closV.length } };
    return data;
  }

}
