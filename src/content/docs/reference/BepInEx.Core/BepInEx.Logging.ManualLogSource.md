---
title: ManualLogSource Class
slug: reference/bepinex.logging.manuallogsource
sidebar:
  label: ManualLogSource
---
## Definition

A generic, multi-purpose log source. Exposes simple API to manually emit logs.

```csharp title="C#"
public class ManualLogSource : ILogSource, IDisposable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/)

Implements [ILogSource](../bepinex.logging.ilogsource/), [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable/)

## Constructors

### ManualLogSource(string)

Creates a manual log source.

```csharp title="C#"
public ManualLogSource(string sourceName)
```

#### Parameters

`sourceName` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
Name of the log source.


## Properties

### SourceName

Name of the log source.

```csharp title="C#"
public string SourceName { get; }
```

## Methods

### Dispose()

Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.

```csharp title="C#"
public void Dispose()
```


### Log(LogLevel, object)

Logs a message with the specified log level.

```csharp title="C#"
public void Log(LogLevel level, object data)
```

#### Parameters

`level` [LogLevel](../bepinex.logging.loglevel/)  
Log levels to attach to the message. Multiple can be used with bitwise ORing.

`data` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
Data to log.


### Log(LogLevel, BepInExLogInterpolatedStringHandler)

Logs an interpolated string with the specified log level.

```csharp title="C#"
public void Log(LogLevel level, BepInExLogInterpolatedStringHandler logHandler)
```

#### Parameters

`level` [LogLevel](../bepinex.logging.loglevel/)  
Log levels to attach to the message. Multiple can be used with bitwise ORing.

`logHandler` [BepInExLogInterpolatedStringHandler](../bepinex.core.logging.interpolation.bepinexloginterpolatedstringhandler/)  
Handler for the interpolated string.


### LogFatal(object)

Logs a message with [Fatal](../bepinex.logging.loglevel/#fatal/) level.

```csharp title="C#"
public void LogFatal(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
Data to log.


### LogFatal(BepInExFatalLogInterpolatedStringHandler)

Logs an interpolated string with [Fatal](../bepinex.logging.loglevel/#fatal/) level.

```csharp title="C#"
public void LogFatal(BepInExFatalLogInterpolatedStringHandler logHandler)
```

#### Parameters

`logHandler` [BepInExFatalLogInterpolatedStringHandler](../bepinex.core.logging.interpolation.bepinexfatalloginterpolatedstringhandler/)  
Handler for the interpolated string.


### LogError(object)

Logs a message with [Error](../bepinex.logging.loglevel/#error/) level.

```csharp title="C#"
public void LogError(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
Data to log.


### LogError(BepInExErrorLogInterpolatedStringHandler)

Logs an interpolated string with [Error](../bepinex.logging.loglevel/#error/) level.

```csharp title="C#"
public void LogError(BepInExErrorLogInterpolatedStringHandler logHandler)
```

#### Parameters

`logHandler` [BepInExErrorLogInterpolatedStringHandler](../bepinex.core.logging.interpolation.bepinexerrorloginterpolatedstringhandler/)  
Handler for the interpolated string.


### LogWarning(object)

Logs a message with [Warning](../bepinex.logging.loglevel/#warning/) level.

```csharp title="C#"
public void LogWarning(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
Data to log.


### LogWarning(BepInExWarningLogInterpolatedStringHandler)

Logs an interpolated string with [Warning](../bepinex.logging.loglevel/#warning/) level.

```csharp title="C#"
public void LogWarning(BepInExWarningLogInterpolatedStringHandler logHandler)
```

#### Parameters

`logHandler` [BepInExWarningLogInterpolatedStringHandler](../bepinex.core.logging.interpolation.bepinexwarningloginterpolatedstringhandler/)  
Handler for the interpolated string.


### LogMessage(object)

Logs a message with [Message](../bepinex.logging.loglevel/#message/) level.

```csharp title="C#"
public void LogMessage(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
Data to log.


### LogMessage(BepInExMessageLogInterpolatedStringHandler)

Logs an interpolated string with [Message](../bepinex.logging.loglevel/#message/) level.

```csharp title="C#"
public void LogMessage(BepInExMessageLogInterpolatedStringHandler logHandler)
```

#### Parameters

`logHandler` [BepInExMessageLogInterpolatedStringHandler](../bepinex.core.logging.interpolation.bepinexmessageloginterpolatedstringhandler/)  
Handler for the interpolated string.


### LogInfo(object)

Logs a message with [Info](../bepinex.logging.loglevel/#info/) level.

```csharp title="C#"
public void LogInfo(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
Data to log.


### LogInfo(BepInExInfoLogInterpolatedStringHandler)

Logs an interpolated string with [Info](../bepinex.logging.loglevel/#info/) level.

```csharp title="C#"
public void LogInfo(BepInExInfoLogInterpolatedStringHandler logHandler)
```

#### Parameters

`logHandler` [BepInExInfoLogInterpolatedStringHandler](../bepinex.core.logging.interpolation.bepinexinfologinterpolatedstringhandler/)  
Handler for the interpolated string.


### LogDebug(object)

Logs a message with [Debug](../bepinex.logging.loglevel/#debug/) level.

```csharp title="C#"
public void LogDebug(object data)
```

#### Parameters

`data` [object](https://learn.microsoft.com/dotnet/api/system.object/)  
Data to log.


### LogDebug(BepInExDebugLogInterpolatedStringHandler)

Logs an interpolated string with [Debug](../bepinex.logging.loglevel/#debug/) level.

```csharp title="C#"
public void LogDebug(BepInExDebugLogInterpolatedStringHandler logHandler)
```

#### Parameters

`logHandler` [BepInExDebugLogInterpolatedStringHandler](../bepinex.core.logging.interpolation.bepinexdebugloginterpolatedstringhandler/)  
Handler for the interpolated string.


## Events

### LogEvent

Event that sends the log message. Call `System.EventHandler.Invoke(System.Object%2cSystem.EventArgs)` to send a log message.

```csharp title="C#"
public event EventHandler<LogEventArgs> LogEvent
```

#### Event Type

[EventHandler\<LogEventArgs\>](https://learn.microsoft.com/dotnet/api/system.eventhandler-1/)