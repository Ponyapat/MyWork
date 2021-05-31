import 'package:flutter/material.dart';

class FormScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Register Form Page"),
        ),
        body: Padding(
          padding: const EdgeInsets.all(10.0),
          child: Form(
              child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                TextFormField(
                  decoration: new InputDecoration(labelText: "Name"),
                  autofocus: true,
                ),
                TextFormField(
                  decoration: new InputDecoration(labelText: "Amount"),
                  keyboardType: TextInputType.number,
                ),
                FlatButton(
                  onPressed: () {
                    Navigator.pop(context);
                  },
                  child: Text("เพิ่มข้อมูล"),
                  color: Colors.greenAccent,
                  textColor: Colors.white,
                )
              ])),
        ));
  }
}
