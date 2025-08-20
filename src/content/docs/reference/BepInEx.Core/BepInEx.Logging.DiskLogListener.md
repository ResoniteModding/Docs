---
title: DiskLogListener Class
slug: reference/bepinex.logging.diskloglistener
sidebar:
  label: DiskLogListener
---
## Definition

Logs entries using Unity specific outputs.

```csharp title="C#"
public class DiskLogListener : ILogListener, IDisposable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

Implements [ILogListener](../bepinex.logging.iloglistener/), [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable/)

## Constructors

### DiskLogListener(string, LogLevel, bool, bool, int)

Creates a new disk log listener.

```csharp title="C#"
public DiskLogListener(string localPath, LogLevel displayedLogLevel = LogLevel.Info, bool appendLog = false, bool delayedFlushing = true, int fileLimit = 5)
```

#### Parameters

`localPath` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Path to the log.

`displayedLogLevel` [LogLevel](../bepinex.logging.loglevel/)  
Log levels to display.

`appendLog` [bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
Whether to append logs to an already existing log file.

`delayedFlushing` [bool](https://learn.microsoft.com/dotnet/api/system.boolean/)  
Whether to delay flushing to disk to improve performance. Useful to set this to false
when debugging crashes.

`fileLimit` [int](https://learn.microsoft.com/dotnet/api/system.int32/)  
Maximum amount of concurrently opened log files. Can help with infinite game boot loops.


## Fields

### BlacklistedSources

```csharp title="C#"
public static HashSet<string> BlacklistedSources
```

## Properties

### DisplayedLogLevel

Log levels to display.

```csharp title="C#"
public LogLevel DisplayedLogLevel { get; }
```

### LogWriter

Writer for the disk log.

```csharp title="C#"
public TextWriter LogWriter { get; protected set; }
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


### ~DiskLogListener()

```csharp title="C#"
protected ~DiskLogListener()
```