#-*- coding:utf-8 -*-
import gtk 
import webkit 

view = webkit.WebView() 

sw = gtk.ScrolledWindow() 
sw.add(view) 

win = gtk.Window(gtk.WINDOW_TOPLEVEL) 
win.add(sw) 
win.set_title("liuyuan")
win.show_all() 

view.open("http://www.6park.com") 
gtk.main()
