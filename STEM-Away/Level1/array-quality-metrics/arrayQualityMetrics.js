// (C) Wolfgang Huber 2010-2011

// Script parameters - these are set up by R in the function 'writeReport' when copying the 
//   template for this script from arrayQualityMetrics/inst/scripts into the report.

var highlightInitial = [ false, false, false, false, false, false, true, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, true, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, true, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true ];
var arrayMetadata    = [ [ "1", "GSM215051.CEL.gz", "1", "10/13/04 11:41:54" ], [ "2", "GSM215052.CEL.gz", "2", "03/23/05 12:55:23" ], [ "3", "GSM215053.CEL.gz", "3", "10/15/04 16:20:19" ], [ "4", "GSM215054.CEL.gz", "4", "10/15/04 16:50:27" ], [ "5", "GSM215055.CEL.gz", "5", "11/12/04 13:08:22" ], [ "6", "GSM215056.CEL.gz", "6", "11/12/04 13:39:05" ], [ "7", "GSM215057.CEL.gz", "7", "12/03/04 11:59:24" ], [ "8", "GSM215058.CEL.gz", "8", "12/03/04 12:29:30" ], [ "9", "GSM215059.CEL.gz", "9", "12/10/04 11:42:54" ], [ "10", "GSM215060.CEL.gz", "10", "12/10/04 13:30:12" ], [ "11", "GSM215061.CEL.gz", "11", "03/23/05 14:48:37" ], [ "12", "GSM215062.CEL.gz", "12", "02/04/05 12:53:15" ], [ "13", "GSM215063.CEL.gz", "13", "02/04/05 13:22:41" ], [ "14", "GSM215064.CEL.gz", "14", "02/04/05 13:50:26" ], [ "15", "GSM215065.CEL.gz", "15", "02/04/05 14:16:43" ], [ "16", "GSM215066.CEL.gz", "16", "02/22/05 13:31:12" ], [ "17", "GSM215067.CEL.gz", "17", "02/22/05 13:59:07" ], [ "18", "GSM215068.CEL.gz", "18", "03/23/05 13:08:26" ], [ "19", "GSM215069.CEL.gz", "19", "06/08/05 14:03:15" ], [ "20", "GSM215070.CEL.gz", "20", "06/08/05 14:32:55" ], [ "21", "GSM215071.CEL.gz", "21", "06/08/05 15:00:38" ], [ "22", "GSM215072.CEL.gz", "22", "06/08/05 15:28:14" ], [ "23", "GSM215073.CEL.gz", "23", "06/21/05 11:52:25" ], [ "24", "GSM215074.CEL.gz", "24", "06/21/05 12:19:37" ], [ "25", "GSM215075.CEL.gz", "25", "06/21/05 13:02:02" ], [ "26", "GSM215076.CEL.gz", "26", "07/12/05 14:02:27" ], [ "27", "GSM215077.CEL.gz", "27", "07/12/05 14:43:07" ], [ "28", "GSM215078.CEL.gz", "28", "07/12/05 15:27:01" ], [ "29", "GSM215079.CEL.gz", "29", "10/03/05 11:42:52" ], [ "30", "GSM215080.CEL.gz", "30", "10/03/05 12:05:57" ], [ "31", "GSM215081.CEL.gz", "31", "01/19/06 12:44:43" ], [ "32", "GSM215082.CEL.gz", "32", "01/19/06 13:07:47" ], [ "33", "GSM215083.CEL.gz", "33", "10/13/04 11:59:24" ], [ "34", "GSM215084.CEL.gz", "34", "10/13/04 12:31:48" ], [ "35", "GSM215085.CEL.gz", "35", "10/15/04 16:35:34" ], [ "36", "GSM215086.CEL.gz", "36", "10/15/04 17:06:23" ], [ "37", "GSM215087.CEL.gz", "37", "03/23/05 13:56:23" ], [ "38", "GSM215088.CEL.gz", "38", "11/12/04 13:54:31" ], [ "39", "GSM215089.CEL.gz", "39", "03/23/05 14:14:58" ], [ "40", "GSM215090.CEL.gz", "40", "01/28/05 12:05:47" ], [ "41", "GSM215091.CEL.gz", "41", "12/10/04 11:58:06" ], [ "42", "GSM215092.CEL.gz", "42", "12/10/04 13:43:35" ], [ "43", "GSM215093.CEL.gz", "43", "02/22/05 14:28:16" ], [ "44", "GSM215094.CEL.gz", "44", "02/04/05 13:07:31" ], [ "45", "GSM215095.CEL.gz", "45", "02/04/05 13:37:18" ], [ "46", "GSM215096.CEL.gz", "46", "02/04/05 14:03:27" ], [ "47", "GSM215097.CEL.gz", "47", "02/04/05 14:32:23" ], [ "48", "GSM215098.CEL.gz", "48", "02/22/05 13:45:32" ], [ "49", "GSM215099.CEL.gz", "49", "02/22/05 14:13:23" ], [ "50", "GSM215100.CEL.gz", "50", "03/23/05 13:38:59" ], [ "51", "GSM215101.CEL.gz", "51", "06/08/05 14:18:40" ], [ "52", "GSM215102.CEL.gz", "52", "06/08/05 14:47:29" ], [ "53", "GSM215103.CEL.gz", "53", "06/08/05 15:14:57" ], [ "54", "GSM215104.CEL.gz", "54", "06/08/05 15:41:55" ], [ "55", "GSM215105.CEL.gz", "55", "06/21/05 12:06:13" ], [ "56", "GSM215106.CEL.gz", "56", "06/21/05 12:33:16" ], [ "57", "GSM215107.CEL.gz", "57", "06/21/05 13:15:42" ], [ "58", "GSM215108.CEL.gz", "58", "07/12/05 14:29:41" ], [ "59", "GSM215109.CEL.gz", "59", "07/12/05 14:56:18" ], [ "60", "GSM215110.CEL.gz", "60", "07/12/05 15:12:06" ], [ "61", "GSM215111.CEL.gz", "61", "10/03/05 11:54:29" ], [ "62", "GSM215112.CEL.gz", "62", "10/03/05 12:47:10" ], [ "63", "GSM215113.CEL.gz", "63", "01/19/06 12:56:16" ], [ "64", "GSM215114.CEL.gz", "64", "01/19/06 13:19:25" ], [ "65", "GSM800742_chip_array_C06N-H.CEL.gz", "1", "08/01/08 12:23:56" ], [ "66", "GSM800743_chip_array_C11N-H.CEL.gz", "2", "08/01/08 12:35:17" ], [ "67", "GSM800744_chip_array_C24N-H.CEL.gz", "3", "08/07/08 17:15:10" ], [ "68", "GSM800745_chip_array_C27N-H.CEL.gz", "4", "08/01/08 13:52:28" ], [ "69", "GSM800746_chip_array_C28N-H.CEL.gz", "5", "08/01/08 14:03:46" ], [ "70", "GSM800747_chip_array_C30N-H.CEL.gz", "6", "08/01/08 15:00:05" ], [ "71", "GSM800748_chip_array_C31N-H.CEL.gz", "7", "08/01/08 15:11:16" ], [ "72", "GSM800749_chip_array_C32N-H.CEL.gz", "8", "08/01/08 15:22:42" ], [ "73", "GSM800750_chip_array_C33N-H.CEL.gz", "9", "08/01/08 15:33:53" ], [ "74", "GSM800751_chip_array_C35N-H.CEL.gz", "10", "08/07/08 12:17:15" ], [ "75", "GSM800752_chip_array_C36N-H.CEL.gz", "11", "08/07/08 12:29:11" ], [ "76", "GSM800753_chip_array_C38N-H.CEL.gz", "12", "08/07/08 12:40:31" ], [ "77", "GSM800754_chip_array_C41N-H.CEL.gz", "13", "08/07/08 12:51:39" ], [ "78", "GSM800755_chip_array_C42N-H.CEL.gz", "14", "08/07/08 13:48:28" ], [ "79", "GSM800756_chip_array_C44N-H.CEL.gz", "15", "08/07/08 13:59:57" ], [ "80", "GSM800757_chip_array_C45N-H.CEL.gz", "16", "08/07/08 14:11:08" ], [ "81", "GSM800758_chip_array_C47N-H.CEL.gz", "17", "07/12/07 12:09:45" ], [ "82", "GSM800759_chip_array_C06T-H.CEL.gz", "18", "10/18/07 14:39:39" ], [ "83", "GSM800760_chip_array_C11T-H.CEL.gz", "19", "10/18/07 14:50:56" ], [ "84", "GSM800761_chip_array_C24T-H.CEL.gz", "20", "10/18/07 16:09:16" ], [ "85", "GSM800762_chip_array_C27T-H.CEL.gz", "21", "10/18/07 16:32:30" ], [ "86", "GSM800763_chip_array_C28T-H.CEL.gz", "22", "10/18/07 16:43:48" ], [ "87", "GSM800764_chip_array_C30T-H.CEL.gz", "23", "10/19/07 12:00:32" ], [ "88", "GSM800765_chip_array_C31T-H.CEL.gz", "24", "10/19/07 12:11:51" ], [ "89", "GSM800766_chip_array_C32T-H.CEL.gz", "25", "10/19/07 12:22:53" ], [ "90", "GSM800767_chip_array_C33T-H.CEL.gz", "26", "10/19/07 12:34:04" ], [ "91", "GSM800768_chip_array_C35T-H.CEL.gz", "27", "10/19/07 13:26:46" ], [ "92", "GSM800769_chip_array_C36T-H.CEL.gz", "28", "10/19/07 13:38:32" ], [ "93", "GSM800770_chip_array_C38T-H.CEL.gz", "29", "10/19/07 13:50:06" ], [ "94", "GSM800771_chip_array_C41T-H.CEL.gz", "30", "10/19/07 14:01:29" ], [ "95", "GSM800772_chip_array_C42T-H.CEL.gz", "31", "10/19/07 14:57:14" ], [ "96", "GSM800773_chip_array_C44T-H.CEL.gz", "32", "10/19/07 15:08:27" ], [ "97", "GSM800774_chip_array_C45T-H.CEL.gz", "33", "10/19/07 15:19:46" ], [ "98", "GSM800775_chip_array_C47T-H.CEL.gz", "34", "10/19/07 15:31:03" ] ];
var svgObjectNames   = [ "pca", "dens", "dig" ];

var cssText = ["stroke-width:1; stroke-opacity:0.4",
               "stroke-width:3; stroke-opacity:1" ];

// Global variables - these are set up below by 'reportinit'
var tables;             // array of all the associated ('tooltips') tables on the page
var checkboxes;         // the checkboxes
var ssrules;


function reportinit() 
{
 
    var a, i, status;

    /*--------find checkboxes and set them to start values------*/
    checkboxes = document.getElementsByName("ReportObjectCheckBoxes");
    if(checkboxes.length != highlightInitial.length)
	throw new Error("checkboxes.length=" + checkboxes.length + "  !=  "
                        + " highlightInitial.length="+ highlightInitial.length);
    
    /*--------find associated tables and cache their locations------*/
    tables = new Array(svgObjectNames.length);
    for(i=0; i<tables.length; i++) 
    {
        tables[i] = safeGetElementById("Tab:"+svgObjectNames[i]);
    }

    /*------- style sheet rules ---------*/
    var ss = document.styleSheets[0];
    ssrules = ss.cssRules ? ss.cssRules : ss.rules; 

    /*------- checkboxes[a] is (expected to be) of class HTMLInputElement ---*/
    for(a=0; a<checkboxes.length; a++)
    {
	checkboxes[a].checked = highlightInitial[a];
        status = checkboxes[a].checked; 
        setReportObj(a+1, status, false);
    }

}


function safeGetElementById(id)
{
    res = document.getElementById(id);
    if(res == null)
        throw new Error("Id '"+ id + "' not found.");
    return(res)
}

/*------------------------------------------------------------
   Highlighting of Report Objects 
 ---------------------------------------------------------------*/
function setReportObj(reportObjId, status, doTable)
{
    var i, j, plotObjIds, selector;

    if(doTable) {
	for(i=0; i<svgObjectNames.length; i++) {
	    showTipTable(i, reportObjId);
	} 
    }

    /* This works in Chrome 10, ssrules will be null; we use getElementsByClassName and loop over them */
    if(ssrules == null) {
	elements = document.getElementsByClassName("aqm" + reportObjId); 
	for(i=0; i<elements.length; i++) {
	    elements[i].style.cssText = cssText[0+status];
	}
    } else {
    /* This works in Firefox 4 */
    for(i=0; i<ssrules.length; i++) {
        if (ssrules[i].selectorText == (".aqm" + reportObjId)) {
		ssrules[i].style.cssText = cssText[0+status];
		break;
	    }
	}
    }

}

/*------------------------------------------------------------
   Display of the Metadata Table
  ------------------------------------------------------------*/
function showTipTable(tableIndex, reportObjId)
{
    var rows = tables[tableIndex].rows;
    var a = reportObjId - 1;

    if(rows.length != arrayMetadata[a].length)
	throw new Error("rows.length=" + rows.length+"  !=  arrayMetadata[array].length=" + arrayMetadata[a].length);

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = arrayMetadata[a][i];
}

function hideTipTable(tableIndex)
{
    var rows = tables[tableIndex].rows;

    for(i=0; i<rows.length; i++) 
 	rows[i].cells[1].innerHTML = "";
}


/*------------------------------------------------------------
  From module 'name' (e.g. 'density'), find numeric index in the 
  'svgObjectNames' array.
  ------------------------------------------------------------*/
function getIndexFromName(name) 
{
    var i;
    for(i=0; i<svgObjectNames.length; i++)
        if(svgObjectNames[i] == name)
	    return i;

    throw new Error("Did not find '" + name + "'.");
}


/*------------------------------------------------------------
  SVG plot object callbacks
  ------------------------------------------------------------*/
function plotObjRespond(what, reportObjId, name)
{

    var a, i, status;

    switch(what) {
    case "show":
	i = getIndexFromName(name);
	showTipTable(i, reportObjId);
	break;
    case "hide":
	i = getIndexFromName(name);
	hideTipTable(i);
	break;
    case "click":
        a = reportObjId - 1;
	status = !checkboxes[a].checked;
	checkboxes[a].checked = status;
	setReportObj(reportObjId, status, true);
	break;
    default:
	throw new Error("Invalid 'what': "+what)
    }
}

/*------------------------------------------------------------
  checkboxes 'onchange' event
------------------------------------------------------------*/
function checkboxEvent(reportObjId)
{
    var a = reportObjId - 1;
    var status = checkboxes[a].checked;
    setReportObj(reportObjId, status, true);
}


/*------------------------------------------------------------
  toggle visibility
------------------------------------------------------------*/
function toggle(id){
  var head = safeGetElementById(id + "-h");
  var body = safeGetElementById(id + "-b");
  var hdtxt = head.innerHTML;
  var dsp;
  switch(body.style.display){
    case 'none':
      dsp = 'block';
      hdtxt = '-' + hdtxt.substr(1);
      break;
    case 'block':
      dsp = 'none';
      hdtxt = '+' + hdtxt.substr(1);
      break;
  }  
  body.style.display = dsp;
  head.innerHTML = hdtxt;
}
