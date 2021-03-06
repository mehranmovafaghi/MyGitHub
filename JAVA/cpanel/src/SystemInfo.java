import java.awt.*;
import java.io.File;

public class SystemInfo extends java.applet.Applet{
	Font f = new Font("Verdana", Font.PLAIN,18);
	public void paint(Graphics g){
		g.setFont(f);
		String processor = "Available processors (cores): " + Runtime.getRuntime().availableProcessors();
		g.drawString(processor, 0, 20);
		String fmemory = "Free memory (bytes): " + Runtime.getRuntime().freeMemory();
		g.drawString(fmemory, 0, 40);
		long maxMemory = Runtime.getRuntime().maxMemory();
		String mmemory= "Maximum memory (bytes): " + (maxMemory == Long.MAX_VALUE ? "no limit" : maxMemory);
		g.drawString(mmemory, 0, 60);
		String tmemory = "Total memory (bytes): " + Runtime.getRuntime().totalMemory();
		g.drawString(tmemory, 0, 80);
	    File[] roots = File.listRoots();
	    for (File root : roots) {
	      String w = "File system root: " + root.getAbsolutePath();
	      String x = "Total space (bytes): " + root.getTotalSpace();
	      String y = "Free space (bytes): " + root.getFreeSpace();
	      String z = "Usable space (bytes): " + root.getUsableSpace();
	      g.drawString(w, 0, 100);
	      g.drawString(x, 0, 120);
	      g.drawString(y, 0, 140);
	      g.drawString(z.toString(), 0, 160);
	    }
	}
}
