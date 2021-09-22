xui.Class('App.ColumnsMixed55', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout5")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "size" : 100,
                        "min" : 50,
                        "max" : 400,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : false
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 450
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "size" : 50,
                        "min" : 20,
                        "max" : 400,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : false
                    }
                ])
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.Layout")
                .setHost(host,"ctl_layout13")
                .setItems([
                    {
                        "id" : "before",
                        "pos" : "before",
                        "size" : 150,
                        "min" : 10,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : true
                    },
                    {
                        "id" : "main",
                        "min" : 10,
                        "size" : 530
                    },
                    {
                        "id" : "after",
                        "pos" : "after",
                        "size" : 120,
                        "min" : 10,
                        "locked" : false,
                        "folded" : false,
                        "hidden" : false,
                        "cmd" : false
                    }
                ])
                .setType("horizontal"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.Module.PageGrid", "xui.Module")
                .setHost(host,"xui_module_pagegrid1"),
                "main"
            );
            
            host.ctl_layout13.append(
                xui.create("xui.UI.TreeView")
                .setHost(host,"xui_ui_treeview9")
                .setItems([
                    {
                        "id" : "node1",
                        "sub" : [
                            "node11",
                            {
                                "id" : "node12",
                                "imageClass" : "xui-icon-xui"
                            },
                            "node13",
                            "node14"
                        ],
                        "caption" : "node1"
                    },
                    {
                        "id" : "node2",
                        "iniFold" : false,
                        "caption" : "node2",
                        "sub" : [
                            {
                                "id" : "node21",
                                "caption" : "node21"
                            },
                            {
                                "id" : "node22",
                                "caption" : "node22"
                            },
                            {
                                "id" : "node23",
                                "caption" : "node23"
                            },
                            {
                                "id" : "node24",
                                "caption" : "node24"
                            }
                        ]
                    }
                ])
                .setLeft("0em")
                .setTop("0em"),
                "before"
            );
            
            host.ctl_layout5.append(
                xui.create("xui.UI.ComboInput")
                .setHost(host,"xui_ui_comboinput52")
                .setDirtyMark(false)
                .setLeft("52.57142857142857em")
                .setTop("6.095238095238095em")
                .setLabelGap("0.3333333333333333em")
                .setType("listbox")
                .setItems([
                    {
                        "id" : "default",
                        "caption" : "default"
                    },
                    {
                        "id" : "army",
                        "caption" : "army"
                    },
                    {
                        "id" : "classic",
                        "caption" : "classic"
                    },
                    {
                        "id" : "darkblue",
                        "caption" : "darkblue"
                    },
                    {
                        "id" : "electricity",
                        "caption" : "electricity"
                    },
                    {
                        "id" : "lightblue",
                        "caption" : "lightblue"
                    },
                    {
                        "id" : "moonify",
                        "caption" : "moonify"
                    },
                    {
                        "id" : "orange",
                        "caption" : "orange"
                    },
                    {
                        "id" : "pink",
                        "caption" : "pink"
                    },
                    {
                        "id" : "red",
                        "caption" : "red"
                    },
                    {
                        "id" : "vista",
                        "caption" : "vista"
                    },
                    {
                        "id" : "webflat",
                        "caption" : "webflat"
                    }
                ])
                .setValue("default")
                .afterUIValueSet("_ctl_comboinput61_afteruivalueset")
                .onChange([
                    {
                        "desc" : "change theme",
                        "type" : "other",
                        "target" : "callback",
                        "args" : [
                            "{xui.setTheme()}",
                            undefined,
                            undefined,
                            "{args[2]}"
                        ],
                        "method" : "call"
                    }
                ]),
                "main"
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});