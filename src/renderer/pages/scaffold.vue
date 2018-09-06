<template>
  <div>
    <div class="scaffold-page">
      <Row>
          <Col span="8" class="scaffold-col">
            <Card :bordered="false" class="scaffold-card">
                <img src="https://www.gstatic.com/images/icons/material/product/2x/chrome_chromium_64dp.png">
                <h3>Web App</h3>
            </Card>
          </Col>
          <Col span="8" class="scaffold-col">
            <Card :bordered="false" class="scaffold-card">
                <img src="https://www.gstatic.com/images/icons/material/product/2x/chrome_chromium_64dp.png">
                <h3>Cordova Project</h3>
            </Card>
          </Col>
          <Col span="8" class="scaffold-col">
            <Card :bordered="false" class="scaffold-card">
                <img src="https://www.gstatic.com/images/icons/material/product/2x/chrome_chromium_64dp.png">
                <h3>Web App</h3>
            </Card>
          </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'scaffold'
  }
</script>

<style scoped lang="scss">
.scaffold-page{
  padding-top: 50px;
  text-align: center;
}
.scaffold-card{
  padding: 10px;
  text-align: center;
  display: inline-block;
  cursor: pointer;
}
</style>
