from flask import Flask, request, jsonify
from flask_cors import CORS
import untitled35
app = Flask(__name__)

CORS(app)

@app.route('/api', methods=['POST'])
def handle_request():
    data = request.get_json()
    '''response_data = {'message': 'Hello from the server!', 'received_data': data}'''
    lis=data['key1']
    print(lis)
    lis=lis.split(",")
    while(len(lis)!=17):
        lis.append(0)
    for i in lis:
        print(type(i))
    response_data=untitled35.predd(lis[0],lis[1],lis[2],lis[3],lis[4],lis[5],lis[6],lis[7],lis[8],lis[9],lis[10],lis[11],lis[12],lis[13],lis[14],lis[15],lis[16])
    return jsonify(response_data)

if __name__ == '__main__':
    app.run(host='localhost', port=6030)
