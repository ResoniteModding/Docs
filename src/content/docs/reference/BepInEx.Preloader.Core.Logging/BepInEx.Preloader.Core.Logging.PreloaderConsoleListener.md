---
title: PreloaderConsoleListener Class
slug: reference/bepinex.preloader.core.logging.preloaderconsolelistener
sidebar:
  label: PreloaderConsoleListener
---
## Definition

Log listener that listens to logs during preloading time and buffers messages for output in Unity logs later.

```csharp title="C#"
public class PreloaderConsoleListener : ILogListener, IDisposable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

Implements [ILogListener](../bepinex.logging.iloglistener/), [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable/)

## Properties

### LogEvents

A list of all [LogEventArgs](../bepinex.logging.logeventargs/) objects that this listener has received.

```csharp title="C#"
public static List<LogEventArgs> LogEvents { get; }
```

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