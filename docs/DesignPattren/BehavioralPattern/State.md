## 名称

状态模式

## 定义

允许对象在内部状态改变时改变它的行为。对象看起来好像修改了它的类。

## 程序实例

![有限状态机](./assets/有限状态机.drawio.png)

```java
/**
 * 环境类
 */
@Data
class ThreadContext {
    private ThreadState state;

    public ThreadContext() {
        state = new NewState();
    }

    public void start() {
        ((NewState) state).start(this);
    }

    public void getCPU() {
        ((RunnableState) state).getCPU(this);
    }

    public void suspend() {
        ((RunningState) state).suspend(this);
    }

    public void stop() {
        ((RunningState) state).stop(this);
    }

    public void resume() {
        ((BlockedState) state).resume(this);
    }
}

/**
 * 抽象状态类：线程状态
 */
abstract class ThreadState {
    protected String stateName;
}

/**
 * 具体状态1：新建状态
 */
class NewState extends ThreadState {
    public NewState() {
        stateName = "新建状态";
        System.out.println("当前线程处于新建状态");
    }

    public void start(ThreadContext ctx) {
        System.out.println("调用start()方法");
        if (stateName.equals("新建状态")) {
            ctx.setState(new RunnableState());
        } else {
            System.out.println("当前状态不是新建状态，不能运行start()方法");
        }
    }
}

/**
 * 具体状态2：就绪状态
 */
class RunnableState extends ThreadState {
    public RunnableState() {
        stateName = "就绪状态";
        System.out.println("当前线程处于就绪状态");
    }

    public void getCPU(ThreadContext ctx) {
        System.out.println("调用getCPU()方法");
        if (stateName.equals("就绪状态")) {
            ctx.setState(new RunningState());
        } else {
            System.out.println("当前状态不是就绪状态，不能使用CPU");
        }
    }
}

/**
 * 具体状态3：运行状态
 */
class RunningState extends ThreadState {
    public RunningState() {
        stateName = "运行状态";
        System.out.println("当前线程处于运行状态");

    }

    public void suspend(ThreadContext ctx) {
        System.out.println("调用suspend()方法");
        if (stateName.equals("运行状态")) {
            ctx.setState(new BlockedState());
        } else {
            System.out.println("当前状态不是运行状态，不嗯呢该调用suspend()方法");
        }
    }

    public void stop(ThreadContext ctx) {
        System.out.println("调用stop()方法");
        if (stateName.equals("运行状态")) {
            ctx.setState(new DeadState());
        } else {
            System.out.println("当前状态不是运行状态，不嗯呢该调用stop()方法");
        }
    }
}

/**
 * 具体状态4：阻塞状态
 */
class BlockedState extends ThreadState {
    public BlockedState() {
        stateName = "阻塞状态";
        System.out.println("当前线程处于阻塞状态");
    }

    public void resume(ThreadContext ctx) {
        System.out.println("调用resume()方法");
        if (stateName.equals("阻塞状态")) {
            ctx.setState(new RunnableState());
        } else {
            System.out.println("当前状态不是阻塞状态");
        }
    }
}

/**
 * 具体状态5：死亡状态
 */
class DeadState extends ThreadState {
    public DeadState() {
        stateName = "死亡状态";
        System.out.println("当前线程处于死亡状态");
    }
}


/**
 * 状态模式
 */
public class State {
    public static void main(String[] args) {
        ThreadContext tc = new ThreadContext();
        tc.start();
        tc.getCPU();
        tc.suspend();
        tc.resume();
        tc.getCPU();
        tc.stop();
    }
}
```

## 应用

- 对象的行为取决于它的状态，并且他必须在运行时根据状态更改其行为；
- 根据对象的状态不同，操作有大量的条件语句。此状态通常有一个或多个枚举常量表示。通常几个操作将包含此相同的条件结构；
  状态模式把条件语句的分支分别放入单独的类中。这样一来就可以将对象的状态视为独立的对象，该对象可以独立于其他对象而变化。

## Java 中的实例

- [javax.faces.lifecycle.Lifecycle#execute()](http://docs.oracle.com/javaee/7/api/javax/faces/lifecycle/Lifecycle.html#execute-javax.faces.context.FacesContext-) controlled by [FacesServlet](http://docs.oracle.com/javaee/7/api/javax/faces/webapp/FacesServlet.html)，行为取决于 `lifecycle` 的当前状态。

