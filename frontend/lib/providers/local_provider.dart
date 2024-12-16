import 'dart:async';

import 'package:devicelocale/devicelocale.dart';
import 'package:flutter/material.dart';
import 'package:frontend/utils/language_utils.dart';
import 'package:hooks_riverpod/hooks_riverpod.dart';

final localeProvider = AsyncNotifierProvider<LocaleNotifier, SupportedLanguage>(
  LocaleNotifier.new,
);

// https://riverpod.dev/docs/providers/notifier_provider
class LocaleNotifier extends AsyncNotifier<SupportedLanguage> {
  @override
  Future<SupportedLanguage> build() async {
    Locale? deviceLocale = await Devicelocale.defaultAsLocale;
    return deviceLocale != null
        ? SupportedLanguage.getSupportedLang(deviceLocale.languageCode)
        : SupportedLanguage.german;
  }

  Future<void> setLang(SupportedLanguage lang) async {
    if (!SupportedLanguage.values.contains(lang)) return;
    state = AsyncData(lang);
  }
}
