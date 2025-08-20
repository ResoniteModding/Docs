---
title: TraceLogSource Class
slug: reference/bepinex.logging.tracelogsource
sidebar:
  label: TraceLogSource
---
## Definition

A source that routes all logs from the inbuilt .NET [Trace](https://learn.microsoft.com/dotnet/api/system.diagnostics.trace/) API to the BepInEx logging system.

```csharp title="C#"
public class TraceLogSource : TraceListener, IDisposable
```

Inheritance [object](https://learn.microsoft.com/dotnet/api/system.object/) → [MarshalByRefObject](https://learn.microsoft.com/dotnet/api/system.marshalbyrefobject/) → [TraceListener](https://learn.microsoft.com/dotnet/api/system.diagnostics.tracelistener/)

Implements [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable/)

## Constructors

### TraceLogSource()

Creates a new trace log source.

```csharp title="C#"
protected TraceLogSource()
```


## Properties

### IsListening

Whether Trace logs are currently being rerouted.

```csharp title="C#"
public static bool IsListening { get; }
```

### LogSource

Internal log source.

```csharp title="C#"
protected ManualLogSource LogSource { get; }
```

## Methods

### CreateSource()

Creates a new trace log source.

```csharp title="C#"
public static ILogSource CreateSource()
```

#### Returns

[ILogSource](../bepinex.logging.ilogsource/)  
New log source (or already existing one).

### Write(string)

Writes a message to the underlying [ManualLogSource](../bepinex.logging.manuallogsource/) instance.

```csharp title="C#"
public override void Write(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The message to write.


### WriteLine(string)

Writes a message and a newline to the underlying [ManualLogSource](../bepinex.logging.manuallogsource/) instance.

```csharp title="C#"
public override void WriteLine(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
The message to write.


### TraceEvent(TraceEventCache, string, TraceEventType, int, string, params object[])

Writes trace information, a formatted array of objects and event information to the listener specific output.

```csharp title="C#"
public override void TraceEvent(TraceEventCache eventCache, string source, TraceEventType eventType, int id, string format, params object[] args)
```

#### Parameters

`eventCache` [TraceEventCache](https://learn.microsoft.com/dotnet/api/system.diagnostics.traceeventcache/)  
A <xref href="System.Diagnostics.TraceEventCache" data-throw-if-not-resolved="false"></xref> object that contains the current process ID, thread ID, and stack trace information.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
A name used to identify the output, typically the name of the application that generated the trace event.

`eventType` [TraceEventType](https://learn.microsoft.com/dotnet/api/system.diagnostics.traceeventtype/)  
One of the <xref href="System.Diagnostics.TraceEventType" data-throw-if-not-resolved="false"></xref> values specifying the type of event that has caused the trace.

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32/)  
A numeric identifier for the event.

`format` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
A format string that contains zero or more format items, which correspond to objects in the <code class="paramref">args</code> array.

`args` [object[]](https://learn.microsoft.com/dotnet/api/system.object/)  
An <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/reference-types">object</a> array containing zero or more objects to format.


### TraceEvent(TraceEventCache, string, TraceEventType, int, string)

Writes trace information, a message, and event information to the listener specific output.

```csharp title="C#"
public override void TraceEvent(TraceEventCache eventCache, string source, TraceEventType eventType, int id, string message)
```

#### Parameters

`eventCache` [TraceEventCache](https://learn.microsoft.com/dotnet/api/system.diagnostics.traceeventcache/)  
A <xref href="System.Diagnostics.TraceEventCache" data-throw-if-not-resolved="false"></xref> object that contains the current process ID, thread ID, and stack trace information.

`source` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
A name used to identify the output, typically the name of the application that generated the trace event.

`eventType` [TraceEventType](https://learn.microsoft.com/dotnet/api/system.diagnostics.traceeventtype/)  
One of the <xref href="System.Diagnostics.TraceEventType" data-throw-if-not-resolved="false"></xref> values specifying the type of event that has caused the trace.

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32/)  
A numeric identifier for the event.

`message` [string](https://learn.microsoft.com/dotnet/api/system.string/)  
A message to write.