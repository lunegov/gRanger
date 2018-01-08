# gRanger
Make visual element for select Int range. Like jQuery plugin slide(), but by native JS.

##How To Use

**HTML:**
<blockquote>
&lt;input type=&quot;text&quot; value=&quot;10&quot; id=&quot;min&quot;&gt;
&lt;input type=&quot;text&quot; value=&quot;100&quot; id=&quot;max&quot;&gt;
&lt;div class=&quot;g-ranger&quot; id=&quot;range&quot;&gt;&lt;/div&gt;
</blockquote>

**CSS:**

<blockquote>
&lt;link rel=&quot;stylesheet&quot; href=&quot;/css/gRanger.min.css&quot;&gt;
</blockquote>


**JS:**

<blockquote>
&lt;script type=&quot;text/javascript&quot;src=&quot;/js/gRanger.min.js&quot; defer&gt;&lt;/script&gt;

&lt;script type=&quot;text/javascript&quot;&gt;
	new gRanger('#range', '#min', '#max');
&lt;/script&gt;
</blockquote>
