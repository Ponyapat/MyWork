import 'package:flutter/material.dart';

class FormScreen extends StatelessWidget {
  final formKey = GlobalKey<FormState>();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Register Form Page"),
        ),
        body: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Form(
            key: formKey,
              child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                TextFormField(
                  decoration: new InputDecoration(labelText: "Name"),
                  autofocus: true,
                  validator: (String str){
                    if(str.isEmpty){
                      return "Error";
                    }
                    return null;
                  },
                ),
                TextFormField(
                  decoration: new InputDecoration(labelText: "Amount"),
                  keyboardType: TextInputType.number,
                ),
                FlatButton(
                  onPressed: () {
                    if(formKey.currentState.validate()){
                      Navigator.pop(context);
                    }
                   
                  },
                  child: Text("เพิ่มข้อมูล"),
                  color: Colors.greenAccent,
                  textColor: Colors.white,
                )
              ])),
        ));
  }
}
