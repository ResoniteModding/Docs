---
title: ConsoleLogListener Class
slug: reference/bepinex.logging.consoleloglistener
sidebar:
  label: ConsoleLogListener
---

## Definition

Logs entries using a console spawned by BepInEx.

```csharp title="C#"
public class ConsoleLogListener : ILogListener, IDisposable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

Implements [ILogListener](../bepinex.logging.iloglistener/), [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable/)

## Fields

### ConfigConsoleDisplayedLevel

```csharp title="C#"
protected static readonly ConfigEntry<LogLevel> ConfigConsoleDisplayedLevel
```

## Properties

### LogLevelFilter

What log levels the listener preliminarily wants.

```csharp title="C#"
public LogLevel LogLevelFilter { get; }
```

## Remarks

The filter is used to more efficiently discard log messages that aren't being listened to. As such, the filter should represent the log levels that the listener will always want to process. It is up to the the implementation of `BepInEx.Logging.ILogListener.LogEvent(System.Object%2cBepInEx.Logging.LogEventArgs)` whether the messages are going to be processed or discarded.

## Methods

### LogEvent(object, LogEventArgs)

Handle an incoming log event.

```csharp title="C#"
public void LogEvent(object sender, LogEventArgs eventArgs)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
Log source that sent the event. Don't use; instead use <xref href="BepInEx.Logging.LogEventArgs.Source" data-throw-if-not-resolved="false"></xref>

`eventArgs` [LogEventArgs](../bepinex.logging.logeventargs/)  
Information about the log message.

### Dispose()

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp title="C#"
public void Dispose()
```
