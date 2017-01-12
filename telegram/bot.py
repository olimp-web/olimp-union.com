import urllib.request
import json
import config

update_id = 70969898
def getRequest():
    result = json.load(urllib.request.urlopen(config.url + '/getUpdates?offset=' + str(update_id)))
    #update_id += 1
    return result
def getId(request):
    return request.get('result')[0].get('message').get('from').get('id')
def getMessage(request):
    return request.get('result')[0].get('message').get('text')
result = getRequest()
print (result)

message = getMessage(result)
id = getId(result)
print('\n')
print(id)
#urllib.request.urlopen(config.url + '/sendMessage?chat_id=' + str(id) + '&text=' + message)