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
                xui.create("xui.Module.JSONEditor", "xui.Module")
                .setHost(host,"xui_module_jsoneditor3"),
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
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});