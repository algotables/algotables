var CsvToHtmlTable = CsvToHtmlTable || {};
var CsvToHtmlTable2 = CsvToHtmlTable2 || {};
var CsvToHtmlTable3 = CsvToHtmlTable3 || {};
var CsvToHtmlTable4 = CsvToHtmlTable4 || {};
var CsvToHtmlTable5 = CsvToHtmlTable5 || {};
var CsvToHtmlTable6 = CsvToHtmlTable6 || {};
var CsvToHtmlTable7 = CsvToHtmlTable7 || {};
var CsvToHtmlTable8 = CsvToHtmlTable8 || {};
var CsvToHtmlTable9 = CsvToHtmlTable9 || {};
var CsvToHtmlTable10 = CsvToHtmlTable10 || {};
var CsvToHtmlTable11 = CsvToHtmlTable11 || {};
var CsvToHtmlTable12 = CsvToHtmlTable12 || {};
var CsvToHtmlTable13 = CsvToHtmlTable13 || {};
var CsvToHtmlTable14 = CsvToHtmlTable14 || {};
var CsvToHtmlTable15 = CsvToHtmlTable15 || {};
var CsvToHtmlTable16 = CsvToHtmlTable16 || {};
var CsvToHtmlTable17 = CsvToHtmlTable17 || {};

var CsvToHtmlTable = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv0";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable2 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv1";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable3 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv2";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable4 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv3";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable5 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv4";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable6 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv5";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable7 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv6";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable8 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv7";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable9 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv8";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable10 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv9";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable11 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv10";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable12 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv11";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable13 = {
  init: function(options) {
    options = options || {};
    var csv_path = options.csv_path || "";
    var el = options.element || "table-csv12";
    var allow_download = options.allow_download || false;
    var csv_options = options.csv_options || {};
    var datatables_options = options.datatables_options || {};
    var custom_formatting = options.custom_formatting || [];
    var customTemplates = {};

    custom_formatting.forEach(function(v) {
      var colIdx = v[0];
      var func = v[1];
      customTemplates[colIdx] = func;
    });

    var table = document.createElement("table");
    table.setAttribute("role", "table");
    table.style.width = "100%";
    table.className = "table table-striped table-bordered hover display nowrap";
    table.id = el + "-table";

    var containerElement = document.getElementById(el);
    containerElement.innerHTML = "";
    containerElement.appendChild(table);

    var processDataChunk = function(csvData, startRow, endRow) {
      var tbody = document.createElement("tbody");

      var rowsHtml = "";
      for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
        var rowHtml = "<tr>";
        for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
          var cellHtml = "<td>";
          var cellTemplateFunc = customTemplates[colIdx];
          if (cellTemplateFunc) {
            cellHtml += cellTemplateFunc(csvData[rowIdx][colIdx]);
          } else {
            cellHtml += csvData[rowIdx][colIdx];
          }
          cellHtml += "</td>";
          rowHtml += cellHtml;
        }
        rowHtml += "</tr>";
        rowsHtml += rowHtml;
      }

      tbody.innerHTML = rowsHtml;
      table.appendChild(tbody);

      if (endRow < csvData.length - 1) {
        // Process next chunk
        setTimeout(function() {
          processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
        }, 0);
      } else {
        // All rows processed
        $(table).DataTable(datatables_options);

        if (allow_download) {
          containerElement.innerHTML += "<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>";
        }
      }
    };

    $.get(csv_path).done(function(data) {
      var csvData = $.csv.toArrays(data, csv_options);
      var thead = document.createElement("thead");
      var tfoot = document.createElement("tfoot");
      var csvHeaderRow = csvData[0];
      var csvFooterRow = csvData[0];
      var theadRow = document.createElement("tr");
      var tfootRow = document.createElement("tr");

      csvHeaderRow.forEach(function(header) {
        var th = document.createElement("th");
        th.textContent = header;
        theadRow.appendChild(th);
      });

      csvFooterRow.forEach(function(footer) {
        var th = document.createElement("th");
        th.textContent = footer;
        tfootRow.appendChild(th);
      });

      thead.appendChild(theadRow);
      tfoot.appendChild(tfootRow);
      table.appendChild(thead);
      table.appendChild(tfoot);

      var tbody = document.createElement("tbody");
      table.appendChild(tbody);

      var tfootThs = table.querySelectorAll("tfoot th");
      Array.from(tfootThs).forEach(function(th) {
        th.innerHTML = '<input type="text" placeholder="Search " />';
      });

      var rowIdx = 1;
      var chunkSize = 10;

      var processDataChunk = function() {
        var endRow = Math.min(rowIdx + chunkSize - 1, csvData.length - 1);

        for (; rowIdx <= endRow; rowIdx++) {
          var row = document.createElement("tr");
          for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var cell = document.createElement("td");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
              cell.innerHTML = cellTemplateFunc(csvData[rowIdx][colIdx]);
            } else {
              cell.textContent = csvData[rowIdx][colIdx];
            }
            row.appendChild(cell);
          }
          tbody.appendChild(row);
        }

        if (endRow < csvData.length - 1) {
          // Process next chunk
          setTimeout(processDataChunk, 0);
        } else {
          // All rows processed
          $(table).DataTable(datatables_options);

          if (allow_download) {
            containerElement.innerHTML += "<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>";
          }
        }
      };

      // Start processing rows in chunks
      processDataChunk();
    });
  }
};   

var CsvToHtmlTable14 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv13";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable15 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv14";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable16 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv15";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  

var CsvToHtmlTable17 = {
    init: function(options) {
        options = options || {};
        var csv_path = options.csv_path || "";
        var el = options.element || "table-csv16";
        var allow_download = options.allow_download || false;
        var csv_options = options.csv_options || {};
        var datatables_options = options.datatables_options || {};
        var custom_formatting = options.custom_formatting || [];
        var customTemplates = {};
    
        $.each(custom_formatting, function(i, v) {
        var colIdx = v[0];
        var func = v[1];
        customTemplates[colIdx] = func;
        });
    
        var $table = $("<table role='table' style='width:100%' class='table table-striped table-bordered hover display nowrap' id='" + el + "-table'></table>");
        var $containerElement = $("#" + el);
        $containerElement.empty().append($table);
    
        var processDataChunk = function(csvData, startRow, endRow) {
        var $tableBody = $table.find("tbody");
    
        for (var rowIdx = startRow; rowIdx <= endRow; rowIdx++) {
            var $tableBodyRow = $("<tr></tr>");
            for (var colIdx = 0; colIdx < csvData[rowIdx].length; colIdx++) {
            var $tableBodyRowTd = $("<td></td>");
            var cellTemplateFunc = customTemplates[colIdx];
            if (cellTemplateFunc) {
                $tableBodyRowTd.html(cellTemplateFunc(csvData[rowIdx][colIdx]));
            } else {
                $tableBodyRowTd.text(csvData[rowIdx][colIdx]);
            }
            $tableBodyRow.append($tableBodyRowTd);
            }
            $tableBody.append($tableBodyRow);
        }
    
        if (endRow < csvData.length - 1) {
            // Process next chunk
            setTimeout(function() {
            processDataChunk(csvData, endRow + 1, Math.min(endRow + 10, csvData.length - 1));
            }, 0);
        } else {
            // All rows processed
            $table.DataTable(datatables_options);
    
            if (allow_download) {
            $containerElement.append("<p><a class='btn btn-info' href='" + csv_path + "'><i class='glyphicon glyphicon-download'></i> Download as CSV</a></p>");
            }
        }
        };
    
        $.get(csv_path).done(function(data) {
        var csvData = $.csv.toArrays(data, csv_options);
        var $tableHead = $("<thead></thead>");
        var $tableFoot = $("<tfoot></tfoot>");
        var csvHeaderRow = csvData[0];
        var csvFooterRow = csvData[0];
        var $tableHeadRow = $("<tr></tr>");
        var $tableFootRow = $("<tr></tr>");
    
        $.each(csvHeaderRow, function(headerIdx, header) {
            $tableHeadRow.append($("<th></th>").text(header));
        });
    
        $.each(csvFooterRow, function(footerIdx, footer) {
            $tableFootRow.append($("<th></th>").text(footer));
        });
    
        $tableHead.append($tableHeadRow);
        $tableFoot.append($tableFootRow);
        $table.append($tableHead).append($tableFoot);
    
        $table.append("<tbody></tbody>");
        $('#' + el + ' tfoot th').each(function() {
            $(this).html('<input type="text" placeholder="Search " />');
        });
    
        // Start processing rows in chunks
        processDataChunk(csvData, 1, Math.min(10, csvData.length - 1));
        });
    }
    };  
