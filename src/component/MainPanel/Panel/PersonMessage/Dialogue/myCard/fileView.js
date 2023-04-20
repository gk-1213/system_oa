
// 修复矩阵的宽度
function fixMatrix(data, colLen) {
    for (const row of data) {
        for (let j = 0; j < colLen; j++) {
            if (!row[j]) {
                row[j] = '';
            }
        }
    }
    return data;
}
function alignToClass({ horizontal, vertical }) {
    return [horizontal, vertical]
        .filter((i) => i)
        .map((key) => `ht${key.charAt(0).toUpperCase()}${key.slice(1)}`)
        .join(" ");
}

export function ws(workbook, sheetIndex) {
    if (workbook.getWorksheet(sheetIndex)) {
        return workbook.getWorksheet(sheetIndex);
    }
    return null;
}
export function parseTheme(workbook) {
    const theme = workbook._themes.theme1;
    const parser = new DOMParser();
    if (theme) {
        const doc = parser.parseFromString(theme, "text/xml");
        const [{ children = [] } = {}] =
            doc.getElementsByTagName("a:clrScheme");
        return [...children]
            .flatMap((node) => [...node.getElementsByTagName("a:srgbClr")])
            .map((node) => node.getAttribute("val"))
            .filter((i) => i);
    }
}
export function columns(workbook, sheetIndex) {
    return ws(workbook, sheetIndex).columns.map((item) => ({
        ...(item.width
            ? { width: item.width < 100 ? 100 : item.width }
            : { width: 100 }),
        height:item.height,
        className: alignToClass(item.alignment || {}),
        renderer: "styleRender",
    }));
}

// export function border(workbook, sheetIndex) {
//     return ws(workbook, sheetIndex).getRows(1, ws(workbook, sheetIndex).actualRowCount).flatMap((row, ri) => {
//         return row._cells
//             .map((cell, ci) => {
//                 if (cell.style && cell.style.border) {
//                     const border = cell.style.border;
//                     const keys = Object.keys(border);
//                     if (keys.length) {
//                         return {
//                             row: ri,
//                             col: ci,
//                             ...keys.reduce((result, key) => {
//                                 result[key] = {
//                                     width: 1,
//                                     color: `#${(border.color && indexedColors[border.color.indexed]) ||
//                                         border.argb ||
//                                         "000000"
//                                         }`,
//                                 };
//                                 return result;
//                             }, {}),
//                         };
//                     }
//                 }
//             })
//             .filter((i) => i);
//     });
// }
export function cols(workbook, sheetIndex) {
    return ws(workbook, sheetIndex).columns.map((item) => item.letter);
}

export function data(workbook, sheetIndex) {
    return fixMatrix(
        ws(workbook, sheetIndex).getRows(1, ws(workbook, sheetIndex).actualRowCount).map((row) =>
            row._cells.map((item) => {
                const value = item.model.value;
                if (value) {
                    if (value.richText) {
                        let temp = value.richText.map(v => {
                            return v.text
                        })
                        return temp.join("");
                    } else {
                        return value;
                    }
                }
                return "";
            })
        ),
        cols(workbook, sheetIndex).length
    );
}
export function cell(workbook, sheetIndex) {
    return ws(workbook, sheetIndex).getRows(1, ws(workbook, sheetIndex).actualRowCount).flatMap((row, ri) => {
        return row._cells
            .map((cell, ci) => {
                if (cell.style) {
                    return {
                        row: ri,
                        col: ci,
                        ...(cell.alignment
                            ? { className: alignToClass(cell.alignment) }
                            : {}),
                        style: cell.style,
                    };
                }
            })
            .filter((i) => i);
    });
}
export function merge(workbook, sheetIndex) {
    const merges = workbook.getWorksheet(sheetIndex)._merges
    let myMerge = Object.values(merges).map(({ left, top, right, bottom }) => {
        // 构建区域
        return {
            row: top - 1,
            col: left - 1,
            rowspan: bottom - top + 1,
            colspan: right - left + 1,
        };
    });
    return myMerge
}


// 首字母大写
export function captain(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
// 连字符转驼峰
export function camelCase(str) {
    return str.split('-').map((part, index) => {
        if (index !== 0) {
            return captain(part);
        } else {
            return part;
        }
    }).join('');
}
//颜色转换
export function colorToHex(theme, tint) {
    let res = '';
    switch (theme) {
        case 1:
            res = "#000000";
            break;
        case 0:
            res = "#FFFFFF";
            break;
        case 3:
            res = "#44546A";
            break;
        case 2:
            res = "#E7E6E6";
            break;
        case 4:
            res = "#5B9BD5";
            break;
        case 5:
            res ="#ED7D31";
            break;
        case 6:
            res = "#A5A5A5";
            break;
        case 7:
            res ="#FFC000";
            break;
        case 8:
            res ="#4472C4";
            break;
        case 9:
            res = "#70AD47";
            break;
        default:
            res ="#FFFFFF";
            break;
    }
    if(tint && tint !== 0){
       if(tint<0){
        return getDarkColor(res,Math.abs(res))
       }else{
        return getLightColor(res,tint)
       }
    }else{
        return res
    }

}
//hex颜色转rgb颜色
function HexToRgb(str) {
    str = str.replace('#', '');
    var hxs = str.match(/../g);
    for (var i = 0; i < 3; i++) hxs[i] = parseInt(hxs[i], 16);
    return hxs;
  }
   
  //GRB颜色转Hex颜色
  function RgbToHex(a, b, c) {
    var hexs = [a.toString(16), b.toString(16), c.toString(16)];
    for (var i = 0; i < 3; i++) if (hexs[i].length === 1) hexs[i] = '0' + hexs[i];
    return '#' + hexs.join('');
  }
   
  //得到hex颜色值为color的加深颜色值，level为加深的程度，限0-1之间
  function getDarkColor(color, level) {
    var rgbc = HexToRgb(color);
    //floor 向下取整
    for (var i = 0; i < 3; i++) rgbc[i] = Math.floor(rgbc[i] * (1 - level));
    return RgbToHex(rgbc[0], rgbc[1], rgbc[2]);
  }
   
  //得到hex颜色值为color的减淡颜色值，level为加深的程度，限0-1之间
  function getLightColor(color, level) {
    var rgbc = HexToRgb(color);
    for (var i = 0; i < 3; i++)
      rgbc[i] = Math.floor((255 - rgbc[i]) * level + rgbc[i]);
    return RgbToHex(rgbc[0], rgbc[1], rgbc[2]);
  }