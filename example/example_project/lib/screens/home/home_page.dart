
import 'dart:io';
import 'dart:typed_data';
import 'package:flutter/material.dart';
import 'package:internet_file/internet_file.dart';
import 'package:internet_file/storage_io.dart';
import 'package:liquid_progress_indicator/liquid_progress_indicator.dart';
import 'package:path_provider/path_provider.dart';

class HomePage extends StatefulWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  final storageIO = InternetFileStorageIO();
  String videoUrl = 'https://jsoncompare.org/LearningContainer/SampleFiles/Video/MP4/Sample-Video-File-For-Testing.mp4';

  double persent = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.indigo,
        elevation: 0,
        title: const Text(
          "Downloder",
        ),
      ),
      body: Center(
        child: SizedBox(
          height: 300.0,
          width: 150.0,
          child: LiquidLinearProgressIndicator(
            value: persent * 0.01,
            valueColor: const AlwaysStoppedAnimation(Colors.indigo),
            backgroundColor: Colors.white,
            borderColor: Colors.black,
            borderWidth: 3.0,
            direction: Axis.vertical,
            center: Text(
              "Downloding : ${persent.toStringAsFixed(1)}",
              style: const TextStyle(
                color: Colors.red,
              ),
            ),
            borderRadius: 15.0,
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () async{
          await downloadFile(videoUrl);
        },
        child: const Icon(Icons.download),
      ),
    );
  }

  Future downloadFile(String url) async {
    Directory appDirectory = await getApplicationDocumentsDirectory();
    debugPrint(appDirectory.path);
    final Uint8List bytes = await InternetFile.get(
      url,
      storage: storageIO,
      process: (percentage) {
        setState(() {
          persent = percentage;
        });
      },
      storageAdditional: {
        'filename' :videoUrl.split('/').last.toString(),
        'location' : appDirectory.path,
      }
    );
  }
}
