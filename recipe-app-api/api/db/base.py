from bson import objectid
def searlize(doc:dict)->dict:
    doc["_id"]=str(doc["_id"])
    return doc

def searlize_docs(docs:list[dict])->list[dict]:
    for doc in docs:
        doc["_id"]=str(doc["_id"])
    return docs