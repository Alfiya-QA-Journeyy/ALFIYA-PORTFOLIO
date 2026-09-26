import mysql.connector

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="0786",   # put your MySQL password if any
        database="ai_yoga"
    )
