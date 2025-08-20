---
title: ILogListener Interface
slug: reference/bepinex.logging.iloglistener
sidebar:
  label: ILogListener
---

## Definition

A generic log listener that receives log events and can route them to some output (e.g. file, console, socket).

```csharp title="C#"
public interface ILogListener : IDisposable
```

## Properties

### LogLevelFilter

What log levels the listener preliminarily wants.

```csharp title="C#"
LogLevel LogLevelFilter { get; }
```

## Remarks

The filter is used to more efficiently discard log messages that aren't being listened to. As such, the filter should represent the log levels that the listener will always want to process. It is up to the the implementation of `BepInEx.Logging.ILogListener.LogEvent(System.Object%2cBepInEx.Logging.LogEventArgs)` whether the messages are going to be processed or discarded.

## Methods

### LogEvent(object, LogEventArgs)

Handle an incoming log event.

```csharp title="C#"
void LogEvent(object sender, LogEventArgs eventArgs)
```

#### Parameters

`sender` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
Log source that sent the event. Don't use; instead use <xref href="BepInEx.Logging.LogEventArgs.Source" data-throw-if-not-resolved="false"></xref>

`eventArgs` [LogEventArgs](../bepinex.logging.logeventargs/)  
Information about the log message.
