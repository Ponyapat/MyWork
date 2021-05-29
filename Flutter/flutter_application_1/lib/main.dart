import 'package:flutter/material.dart';
import 'MoneyBox.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "My App",
      home: MyHomePage(),
      theme: ThemeData(primaryColor: Colors.lightGreen),
    );
  }
}

class MyHomePage extends StatefulWidget {
  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(
            "บัญชีของฉัน",
            style: TextStyle(
                fontSize: 30, color: Colors.white, fontWeight: FontWeight.bold),
          ),
        ),
        body: Padding(
            padding: const EdgeInsets.all(20.0),
            child: Column(children: [
              MoneyBox("ยอดคงเหลือ", 10000, Colors.blueAccent, 120),
              SizedBox(height: 10),
              MoneyBox("รายจ่าย", 5000, Colors.redAccent, 80),
              SizedBox(height: 10),
              MoneyBox("รายรับ", 8000, Colors.lightGreenAccent, 80)
            ])));
  }
}
