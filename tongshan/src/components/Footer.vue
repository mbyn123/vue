<template>
  <div>
    <Row>
      <Col span="24">
        <div class="footer-wrop">
          <div class="footer">
               <div class="logo">
                <em class="arrows">^<em class="wire">_</em></em>
               </div>
            <div>版权所有@ 2016-2019 铜山水利局</div>
            <div>
              <span>联系电话:0516-69682066</span>
              <span>地址: 徐州市铜山区长江西路9-01科技创业大厦8楼</span>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer-wrop {
  padding-top: 50px;
}
.footer {
  background-image: url(../assets/footerimg.jpg);
  text-align: center;
  font-size: 14px;
  padding: 30px 0;
  position: relative;
}
.footer .logo{
    position: absolute;
    top:-20px;
    left:50%;
    width:50px;
    height:50px;
    border:5px solid #E3EBFA;
    border-radius: 50%;
    background: #94BAEF;
    font-size:40px;
    line-height: 60px;
    color:#fff;
    cursor: pointer;
}
.footer .logo .arrows{
    position: relative;
}
.footer .logo .wire{
    position: absolute;
    top:-42px;
    left:2px;
}
</style>
