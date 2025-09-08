---
title: BepInEx.Logging
slug: reference/bepinex.logging
sidebar:
  order: 0
---
## Classes

| | |
| --- | --- |
| [ConsoleLogListener](../bepinex.logging.consoleloglistener/) | Logs entries using a console spawned by BepInEx. |
| [DiskLogListener](../bepinex.logging.diskloglistener/) | Logs entries using Unity specific outputs. |
| [HarmonyLogSource](../bepinex.logging.harmonylogsource/) |  |
| [LogEventArgs](../bepinex.logging.logeventargs/) | Log event arguments. Contains info about the log message. |
| [LogLevelExtensions](../bepinex.logging.loglevelextensions/) | Helper methods for log level handling. |
| [Logger](../bepinex.logging.logger/) | Handles pub-sub event marshalling across all log listeners and sources. |
| [ManualLogSource](../bepinex.logging.manuallogsource/) | A generic, multi-purpose log source. Exposes simple API to manually emit logs. |
| [TraceLogSource](../bepinex.logging.tracelogsource/) | A source that routes all logs from the inbuilt .NET [Trace](https://learn.microsoft.com/dotnet/api/system.diagnostics.trace/) API to the BepInEx logging system. |
## Interfaces

| | |
| --- | --- |
| [ILogListener](../bepinex.logging.iloglistener/) | A generic log listener that receives log events and can route them to some output (e.g. file, console, socket). |
| [ILogSource](../bepinex.logging.ilogsource/) | Log source that can output log messages. |
## Enums

| | |
| --- | --- |
| [LogLevel](../bepinex.logging.loglevel/) | The level, or severity of a log entry. |