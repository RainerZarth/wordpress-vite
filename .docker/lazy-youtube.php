<section color="<?php echo $attributes['farbe']; ?>" content-type="yt">
  <lazy-iframe
    data-url="<?php echo $attributes['url']; ?>"
    data-start="
      <?php echo $attributes['starth']; ?>:
      <?php echo $attributes['startmin']; ?>:
      <?php echo $attributes['startsec']; ?>"
    data-end="
      <?php echo $attributes['endh']; ?>:
      <?php echo $attributes['endmin']; ?>:
      <?php echo $attributes['endsec']; ?>"
    >
  </lazy-iframe>
</section>