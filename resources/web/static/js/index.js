$(function () {
    search();
});
$("input").on("input copy", function () {
    search($("#search").val());
});

$("#wuqing").on("click", function () {
    $("#table thead").html("<tr role=\"row\">\n" +
        "<th class=\"width-25 size-07 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 240px;\">物品\n" +
        "</th>\n" +
        "<th class=\"width-15 size-05 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 136px;\">无情\n" +
        "</th>\n" +
        "<th class=\"width-15 size-05 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 136px;\">叶问舟\n" +
        "</th>\n" +
        "<th class=\"width-15 size-05 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 136px;\">方应看\n" +
        "</th>\n" +
        "<th class=\"width-15 size-05 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 136px;\">顾惜朝\n" +
        "</th>\n" +
        "<th class=\"width-15 size-05 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 136px;\">燕无归\n" +
        "</th>\n" +
        "</tr>");
    search();
});

$("#xueqing").on("click", function () {
    $("#table thead").html("<tr role=\"row\">\n" +
        "<th class=\"width-25 size-07 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 240px;\">物品\n" +
        "</th>\n" +
        "<th class=\"width-15 size-05 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 136px;\">花将离\n" +
        "</th>\n" +
        "<th class=\"width-15 size-05 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 136px;\">叶雪青\n" +
        "</th>\n" +
        "<th class=\"width-15 size-05 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 136px;\">姬蜜儿\n" +
        "</th>\n" +
        "<th class=\"width-15 size-05 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 136px;\">李师师\n" +
        "</th>\n" +
        "<th class=\"width-15 size-05 sorting_disabled\" rowspan=\"1\" colspan=\"1\"\n" +
        "    style=\"width: 136px;\">温柔\n" +
        "</th>\n" +
        "</tr>");
    search();
});

function search(input) {
    let jDom = $("#table tbody");
    jDom.html("");
    let type=$("[name='type']:checked").val();
    let list;
    if(type==="wuqing"){
        list=wuqing;
    }else {
        list=xueqing;
    }
    list.forEach(function (value) {
        if (input !== undefined) {
            if (value.gift.indexOf(input) === -1) {
                return true;
            }
        }
        let html = "<tr>";
        $.each(value, function (k, v) {
            if (k === "gift") {
                html += "<td class=\"td_v size-07 width-25 center\">" + v + "</td>";
            }
            else {
                html += "<td class=\"td_v size-07 width-15 center\" data-key=\"" + k + "\">" + v + "</td>";
            }
        });
        html += "</tr>";
        jDom.append(html);
    });
}
