---
title: ILogSource Interface
slug: reference/bepinex.logging.ilogsource
sidebar:
  label: ILogSource
---

## Definition

Log source that can output log messages.

```csharp title="C#"
public interface ILogSource : IDisposable
```

## Properties

### SourceName

Name of the log source.

```csharp title="C#"
string SourceName { get; }
```

## Events

### LogEvent

Event that sends the log message. Call `System.EventHandler.Invoke(System.Object%2cSystem.EventArgs)` to send a log message.

```csharp title="C#"
event EventHandler<LogEventArgs> LogEvent
```

#### Event Type

[EventHandler\<LogEventArgs\>](https://learn.microsoft.com/dotnet/api/system.eventhandler-1/)
