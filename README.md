# gRanger
Make visual element for select Int range. Like jQuery plugin slide(), but by native JS.

## How To Use

**HTML:**
<blockquote>
&lt;input type=&quot;text&quot; value=&quot;10&quot; id=&quot;min&quot;&gt;<br/>
&lt;input type=&quot;text&quot; value=&quot;100&quot; id=&quot;max&quot;&gt;<br/>
&lt;div class=&quot;g-ranger&quot; id=&quot;range&quot;&gt;&lt;/div&gt;
</blockquote>

**CSS:**

<blockquote>
&lt;link rel=&quot;stylesheet&quot; href=&quot;/css/gRanger.min.css&quot;&gt;
</blockquote>


**JS:**

<blockquote>
&lt;script type=&quot;text/javascript&quot;src=&quot;/js/gRanger.min.js&quot; defer&gt;&lt;/script&gt;<br/><br/>
&lt;script type=&quot;text/javascript&quot;&gt;<br/>
	new gRanger('#range', '#min', '#max');<br/>
&lt;/script&gt;
</blockquote>
