import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "My App",
      home: MyHomePage(),
      theme: ThemeData(primaryColor: Colors.redAccent.shade100),
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
  Widget build(BuildContext context) {
    List<Widget> data = [];

    for (var i = 0; i < 10; i++) {
      data.add(Text("รายการที่ ${i + 1}"));
    }

    return Scaffold(
      appBar: AppBar(
        title: Text("Calculator"),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: data,
        ),
      ),
      floatingActionButton:
          FloatingActionButton(onPressed: addNumber, child: Icon(Icons.add)),
    );
  }

  void addNumber() {
    setState(() {
      number++;
    });
  }
}
