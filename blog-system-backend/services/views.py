#!/usr/bin/env python
# coding=utf8

import sys
from django.http import HttpResponse, JsonResponse
import json
import MySQLdb

from django.views.decorators.csrf import csrf_exempt
from utils import dbutil

reload(sys)
sys.setdefaultencoding('utf-8')

def getBlogDirList(request):
    print request

    menu_list = []
    menu_sql = """
        select id, name, parent_id, level from blog_system.blog_menu where is_del=0 and level=1
    """
    ret = dbutil.execute(menu_sql)
    for (id, name, parent_id, level) in ret:
        print id, name, parent_id, level
        menu_dict = {
            "index": "/blogList/" + str(id),
            "name": name,
            "childrenList": []
        }

        menu_child_sql = """
            select id, name, parent_id, level from blog_system.blog_menu where is_del=0 and level=2 and parent_id=%s
        """ % id
        child_ret = dbutil.execute(menu_child_sql)
        for (id, name, parent_id, level) in child_ret:
            child_list = menu_dict.get("childrenList")
            child_menu_dict = {
                "index": "/blogList/" + str(id),
                "name": name,
            }
            child_list.append(child_menu_dict)

        menu_list.append(menu_dict)

    ret = {
        "code": 0,
        "data": {"dirList": menu_list}
    }

    return JsonResponse(ret, safe=False)

def getMenuList(request):
    print request
    menu_list = []
    menu_sql = """
        select id, name, parent_id, level from blog_system.blog_menu where is_del=0 and level=1
    """
    ret = dbutil.execute(menu_sql)
    for (id, name, parent_id, level) in ret:
        print id, name, parent_id, level
        menu_dict = {
            "value": id,
            "label": name,
            "children": []
        }
        menu_child_sql = """
            select id, name, parent_id, level from blog_system.blog_menu where is_del=0 and level=2 and parent_id=%s
        """ % id
        child_ret = dbutil.execute(menu_child_sql)
        for (id, name, parent_id, level) in child_ret:
            child_list = menu_dict.get("children")
            child_menu_dict = {
                "value": id,
                "label": name,
            }
            child_list.append(child_menu_dict)
        menu_list.append(menu_dict)

    ret = {
        "code": 0,
        "data": {"menuList": menu_list}
    }

    return JsonResponse(ret, safe=False)

def saveBlog(request):
    params = request.body
    params = json.loads(params)
    # print params
    print "111", params.get("content"), params.get("menuId"), params.get("title")
    insert_content_sql = """
        insert into blog_system.blog_detail (menu_id, title, content) values (%s, "%s", "%s")
    """ % (params.get("menuId"), MySQLdb.escape_string(params.get("title")), MySQLdb.escape_string(params.get("content")))
    print insert_content_sql
    count = dbutil.stat(insert_content_sql)

    status = 1 if count>=1 else 0
    ret = {
        "code": 0,
        "data": {"status": status}
    }
    return JsonResponse(ret, safe=False)

def getBlogList(request):
    params = request.body
    params = json.loads(params)
    menu_id = params.get("menuId")
    print "222", menu_id
    blog_list = []
    list_sql = """
        select id, menu_id, title, content, create_time from blog_system.blog_detail where is_del=0 and menu_id=%s order by create_time desc
    """ % menu_id
    ret_list = dbutil.execute(list_sql)
    for (id, menu_id, title, content, create_time) in ret_list:
        print content, create_time
        item = {
            "id": id,
            "menuId": menu_id,
            "title": title,
            "brief": str(content)[0:300] + "...",
            "createTime": create_time
        }
        blog_list.append(item)

    ret = {
        "code": 0,
        "data": {"blogList": blog_list}
    }
    return JsonResponse(ret, safe=False)

def getBlogDetail(request):
    params = request.body
    params = json.loads(params)
    blog_id = params.get("blogId")
    print "222", blog_id
    item = {}
    blog_sql = """
        select id, menu_id, title, content, create_time from blog_system.blog_detail where is_del=0 and id=%s
    """ % blog_id
    ret = dbutil.execute(blog_sql)
    for (id, menu_id, title, content, create_time) in ret:
        print content, create_time
        item = {
            "id": id,
            "menuId": menu_id,
            "title": title,
            "content": str(content),
            "createTime": create_time
        }

    ret = {
        "code": 0,
        "data": item
    }
    return JsonResponse(ret, safe=False)
