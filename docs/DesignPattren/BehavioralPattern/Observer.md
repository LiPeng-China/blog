## 别称

观察者模式、发布-订阅模式、模型-视图模式、源-监听器模式、从属者模式。

## 目的

定义一种一对多的对象依赖关系这样当一个对象改变状态时，所有依赖它的对象都将自动通知或更新。

## 程序实例1

```java
/**
 * 被观察者
 */
@Data
@AllArgsConstructor
class Child extends Observable {

    private String name;

    public void cry() {
        System.out.println("我哭了。。。");
        super.setChanged();
        super.notifyObservers();
    }
}

/**
 * 观察者
 */
@Data
@AllArgsConstructor
class Father implements Observer {

    private String name;

    @Override
    public void update(Observable o, Object arg) {
        System.out.println(this.name + ":" + ((Child) o).getName() + "哭了，继续打游戏吧。");
    }
}

@Data
@AllArgsConstructor
class Mother implements Observer {

    private String name;

    @Override
    public void update(Observable o, Object arg) {
        System.out.println(this.name + ":" + ((Child) o).getName() + "哭了，去冲个奶粉吧……");

    }
}

@Data
@AllArgsConstructor
class Pet implements Observer {

    private String name;

    @Override
    public void update(Observable o, Object arg) {
        System.out.println(this.name + ":" + "汪汪汪……");

    }
}

public class Observer_1 {
    public static void main(String[] args) {

        Child baby = new Child("宝宝");

        Observer father = new Father("爸爸");
        Observer mother = new Mother("妈妈");
        Observer dog = new Pet("宠物狗");

        baby.addObserver(father);
        baby.addObserver(mother);
        baby.addObserver(dog);
        
        baby.cry();
    }
}
```

## 程序实例2

```java
/**
 * 观察者抽象
 */
interface EventListener {
}

@Data
class Event {
    // 事件源，动作是由谁发动的
    private Object source;
    // 事件触发，要通知谁（观察者）
    private EventListener target;
    // 观察者给的回应
    private Method callback;
    //事件的名称
    private String trigger;
    //事件的触发事件
    private long time;

    public Event(EventListener target, Method callback) {
        this.target = target;
        this.callback = callback;
    }

}

/**
 * 被观察者的抽象
 */
class EventContext {
    protected Map<String, Event> events = new HashMap<String, Event>();

    public void addListener(String eventType, EventListener target, Method callback) {
        events.put(eventType, new Event(target, callback));
    }

    public void addListener(String eventType, EventListener target) {

        try {
            this.addListener(eventType, target, target.getClass().getMethod("on" + toUpperFirstCase(eventType), Event.class));
        } catch (NoSuchMethodException e) {
            return;
        }

    }

    private String toUpperFirstCase(String eventType) {
        char[] chars = eventType.toCharArray();
        chars[0] -= 32;
        return String.valueOf(chars);
    }

    private void trigger(Event event) {
        event.setSource(this);
        event.setTime(System.currentTimeMillis());

        try {
            if (event.getCallback() != null) {
                // 用反射调用回调函数
                event.getCallback().invoke(event.getTarget(), event);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 事件触发
    protected void trigger(String trigger) {
        if (!this.events.containsKey(trigger)) {
            return;
        }
        trigger(this.events.get(trigger));
    }
}


interface MouseEventType {
    String ON_CLICK = "click";
    String ON_MOVE = "move";
}

/**
 * 具体的被观察者
 */
class Mouse extends EventContext {
    public void click() {
        System.out.println("调用点击方法");
        this.trigger(MouseEventType.ON_CLICK);
    }

    public void move() {
        System.out.println("调用移动方法");
        this.trigger(MouseEventType.ON_MOVE);
    }
}

/**
 * 观察者
 */
class MouseEventListener implements EventListener {
    public void onClick(Event e) {
        System.out.println("===============触发 click 事件=============\n" + e);
    }

    public void onMove(Event e) {
        System.out.println("===============触发 move 事件=============\n" + e);
    }
}

public class Observer {
    public static void main(String[] args) {
        MouseEventListener listener = new MouseEventListener();

        Mouse mouse = new Mouse();
        mouse.addListener(MouseEventType.ON_CLICK, listener);
        mouse.addListener(MouseEventType.ON_MOVE, listener);

        mouse.click();
        mouse.move();
    }
}
```

## UML图

![image](./assets/Observer.png)

## 应用

- 当抽象具有两个方面时，一个方面依赖于另一个方面。将这些方面封装在单独的对象中，可以使你分别进行更改和重用
- 当一个对象的改变的同时需要改变其他对象，同时你又不知道有多少对象需要改变时
- 当一个对象可以通知其他对象而无需假设这些对象是谁时。换句话说，你不想让这些对象紧耦合。

## Java中的用例

- [java.util.Observer](http://docs.oracle.com/javase/8/docs/api/java/util/Observer.html)
- [java.util.EventListener](http://docs.oracle.com/javase/8/docs/api/java/util/EventListener.html)
- [javax.servlet.http.HttpSessionBindingListener](http://docs.oracle.com/javaee/7/api/javax/servlet/http/HttpSessionBindingListener.html)
- [RxJava](https://github.com/ReactiveX/RxJava)
