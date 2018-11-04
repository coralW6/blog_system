#!/usr/bin/env python
# coding=utf8

import sys
from datetime import datetime

reload(sys)
sys.setdefaultencoding('utf-8')


def datetime2str(t, format="%s年%s月%s日 %s:%s:%s"):
    t_tmp = datetime.strptime(str(t), "%Y-%m-%d %H:%M:%S")
    return format % (str(t_tmp.year), str(t_tmp.month), str(t_tmp.day), str(t_tmp.hour), str(t_tmp.minute), str(t_tmp.second))
