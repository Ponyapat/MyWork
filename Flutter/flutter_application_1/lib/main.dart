import 'package:flutter/material.dart';
import 'MoneyBox.dart';
import 'package:http/http.dart' as http;

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
  int number = 0;

  @override
  void initState() {
    super.initState();
    getExchangeRate();
  }

  void getExchangeRate() {
    var url = "";
    print("ดึงข้อมูลมา");
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(
          "อัตราแลกเปลี่ยน",
          style: TextStyle(
              fontSize: 30, color: Colors.white, fontWeight: FontWeight.bold),
        ),
      ),
      body: Column(children: [
        Text(number.toString(), style: TextStyle(fontSize: 20)),
      ]),
      floatingActionButton: FloatingActionButton(
          onPressed: () {
            setState(() {
              number++;
            });
          },
          child: Icon(Icons.add)),
    );
  }
}
