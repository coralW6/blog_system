#!/usr/bin/env python
# coding=utf8

from django.http import HttpResponse, JsonResponse
import json
import MySQLdb

from django.views.decorators.csrf import csrf_exempt

from utils import dbutil

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

@csrf_exempt
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