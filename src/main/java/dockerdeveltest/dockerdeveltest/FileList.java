package dockerdeveltest.dockerdeveltest;

import java.util.List;

public class FileList {

	private final List<String> dates;
	private final List<String> names;

	public FileList(List<String> _dates, List<String> _names) {
		this.dates = _dates;
		this.names = _names;
	}

	public List<String> getDates() {
		return dates;
	}

	public List<String> getNames() {
		return names;
	}
}