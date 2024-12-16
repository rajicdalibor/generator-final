import 'package:flutter/material.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

final themeProvider =
    NotifierProvider<ThemeNotifier, Brightness>(ThemeNotifier.new);

class ThemeNotifier extends Notifier<Brightness> {
  @override
  Brightness build() {
    return Brightness.light;
  }

  void toggleTheme(bool isDark) {
    state = isDark ? Brightness.dark : Brightness.light;
  }
}
