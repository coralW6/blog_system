from django.db import connection, models
import traceback

def execute(sql, params=None, auto_close=True):
    cur = None
    try:
        sql = sql.strip()
        cur = connection.cursor()
        cur.execute(sql, params)
        result = cur.fetchall()
        #print "ret_len:", len(result)
        return result
    except Exception, e:
        if params:
            print sql % params
        else:
            print sql
        traceback.print_exc()
    finally:
        if cur and auto_close:
            cur.close()

def stat(sql, params=None, auto_close=True):
    cur = None
    try:
        cur = connection.cursor()
        infect_rows = cur.execute(sql, params)
        connection.commit()
        return infect_rows
    except Exception, e:
        if params:
            print sql % params
        else:
            print sql
        raise e
    finally:
        if cur and auto_close:
            cur.close()
