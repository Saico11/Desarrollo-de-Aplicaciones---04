import firebase_admin
from firebase_admin import credentials, firestore
from flask import Flask, jsonify, request

cred = credentials.Certificate('./dda-04-lab13-firebase-adminsdk-mkj1h-7870ee361a.json')
firebase_admin.initialize_app(cred)

db = firestore.client()

app = Flask(__name__)

@app.route('/api/obtener_datos', methods=['GET'])
def obtener_datos():
    try:
        productos_ref = db.collection('productos')
        productos = productos_ref.stream()

        productos_lista = []
        for producto in productos:
            productos_lista.append(producto.to_dict())
        
        return jsonify(productos_lista), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/agregar_producto', methods=['POST'])
def agregar_producto():
    try:
        data = request.get_json()

        productos_ref = db.collection('productos')
        productos_ref.add(data)

        return jsonify({'message': 'Producto agregado exitosamente'}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
