<template>
  <div>
    <div>
      <topbar></topbar>
    </div>
    <div class="ground section">
      <Navibar></Navibar>
    </div>
    <div class="middle_section">
      <img id="logo"
           src=@/assets/Logo.png
           width="150"
           height="150"
           alt="Logo.png">
    </div>
    <section class="chat-box">
      <div class="chat-box-list-container">
        <ul class="chat-box-list">
          <li class="message">

          </li>
        </ul>

      </div>
      <div class="chat-inputs">
        <input type="text"
               v-model="message" @keyup.enter="sendMessage"/>
        <button @click="sendMessage">Send</button>
      </div>
    </section>
  </div>
</template>

<script>
import Navibar from "@/components/Navibar";
import Topbar from "@/components/topbar";
export default {
  name: "chatbot",
  components: {Topbar, Navibar},
  data: () => ({
    message: "",
  }),
  methods: {
    sendMessage() {
      const message = this.message
      this.messages.push({
        text: message,
        author: 'client'
      })
      this.message = ''
      this.$axios.get(`https://www.cleverbot.com/getreply?key=CC8uqcCcSO3VsRFvp5-uW5Nxvow&input=${message}`)
          .then(res => {
            this.messages.push({
              text: res.data.output,
              author: 'server'
            })
            this.$nextTick(() => {
              this.$refs.chatbox.scrollTop = this.$refs.chatbox.scrollHeight
            })
          })
    }
  }
}
</script>

<style scoped lang="scss">
.chat-box,
.chat-box-list {
  display: flex;
  flex-direction: column;
  list-style-type: none;
}

.middle_section {
  display: block;
  text-align: center;
}
.chat-box-list-container {
  overflow: scroll;
  margin-bottom: 1px;
}
.chat-box-list {
  padding-left: 10px;
  padding-right: 10px;
  span {
    padding: 8px;
    color: #8B0000;
    border-radius: 4px;
  }
  .server {
    span {
      background: #8B0000;
    }
    p {
      float: right;
    }
  }
  .client {
    span {
      background: #8B0000;
    }
    p {
      float: left;
    }
  }
}
.chat-box {
  margin: 10px;
  border: 1px solid #8B0000;
  width: 50vw;
  height: 50vh;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  align-items: space-between;
  justify-content: space-between;
}
.chat-inputs {
  display: flex;

  input {
    line-height: 3;
    width: 100%;
    border: 1px solid #8B0000;
    border-left: none;
    border-bottom: none;
    border-right: none;
    border-bottom-left-radius: 4px;
    padding-left: 15px;
  }
  button {
    width: 145px;
    color: white;
    background: #8B0000;
    border-color: #8B0000;
    border-bottom: none;
    border-right:none;
    border-bottom-right-radius: 3px;
  }
}
</style>