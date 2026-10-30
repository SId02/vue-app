   
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
   <template>
  <div class="min-h-screen bg-slate-50 text-slate-800 pb-16">
    
    <!-- Top Bar Navigation -->
    <div class="max-w-4xl w-full mx-auto px-6 pt-6">
      <router-link
        to="/"
        class="inline-flex items-center px-4 py-2 text-sm font-medium text-slate-700 bg-white border border-slate-200/80 rounded-xl shadow-sm hover:bg-slate-100 transition-all"
      >
        ← Back to Home
      </router-link>
    </div>

    <!-- Main Container -->
    <main class="max-w-2xl mx-auto px-4 py-8 space-y-8">
      
      <!-- Section 1: Password Generator & Strength Checker Combined -->
      <div class="bg-white p-6 sm:p-8 rounded-3xl shadow-sm border border-slate-200/80 space-y-6">
        <div class="text-center">
          <h1 class="text-2xl font-extrabold tracking-tight text-slate-900">Secure Password Hub</h1>
          <p class="text-sm text-slate-500 mt-1">Generate a secure password and analyze its strength instantly</p>
        </div>

        <!-- Password Display & Copy Box -->
        <div class="relative flex items-center">
          <input
            type="text"
            readonly
            :value="password"
            ref="passwordRef"
            placeholder="Generated password..."
            class="w-full px-4 py-3 bg-slate-100/80 border border-slate-200 rounded-2xl font-mono text-slate-800 text-sm focus:outline-none"
          />
          <button
            @click="copyPasswordToClipboard"
            class="absolute right-2 px-3 py-1.5 bg-white border border-slate-200 hover:bg-slate-50 rounded-xl shadow-sm transition-all text-xs font-semibold text-slate-600 flex items-center space-x-1"
            title="Copy password"
          >
            <span>Copy</span>
          </button>

          <!-- Copied Popup Feedback -->
          <transition name="fade">
            <span 
              v-if="copied" 
              class="absolute -top-8 right-0 px-2.5 py-1 text-xs font-semibold text-white bg-slate-900 rounded-lg shadow-md whitespace-nowrap"
            >
              Copied! 🎉
            </span>
          </transition>
        </div>

        <!-- Live Strength Analysis of the Generated Password -->
        <div class="space-y-2 bg-slate-50 p-4 rounded-2xl border border-slate-200/60">
          <div class="flex justify-between items-center text-sm font-medium">
            <span class="text-slate-700">Password Strength:</span>
            <span :class="messageColor" class="font-bold">{{ message }}</span>
          </div>

          <!-- Progress Bar -->
          <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              class="h-full transition-all duration-300"
              :style="{ width: strengthBarWidth, backgroundColor: strengthBarColor }"
            ></div>
          </div>
        </div>

        <!-- Controls: Length & Toggles -->
        <div class="space-y-4 pt-2">
          <div>
            <div class="flex justify-between text-sm font-medium text-slate-700 mb-1">
              <label for="length">Password Length</label>
              <span class="font-mono font-bold text-indigo-600">{{ length }}</span>
            </div>
            <input
              type="range"
              id="length"
              min="8"
              max="30"
              v-model.number="length"
              class="w-full accent-indigo-600 cursor-pointer"
            />
          </div>

          <div class="flex flex-wrap gap-6 pt-2">
            <label class="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer select-none">
              <input
                type="checkbox"
                v-model="numberAllowed"
                class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>Include Numbers (0-9)</span>
            </label>

            <label class="flex items-center space-x-2 text-sm text-slate-700 cursor-pointer select-none">
              <input
                type="checkbox"
                v-model="symbolAllowed"
                class="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300"
              />
              <span>Include Symbols (!@#$%)</span>
            </label>
          </div>

          <!-- Generate Button -->
          <button
            @click="generatePassword"
            class="w-full mt-4 py-3 px-4 text-white font-medium bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] rounded-xl shadow-lg shadow-indigo-500/25 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Generate New Password
          </button>
        </div>

      </div>

    </main>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';

// --- Generator & Strength State ---
const length = ref(12);
const numberAllowed = ref(true);
const symbolAllowed = ref(true);
const password = ref('');
const passwordRef = ref(null);
const copied = ref(false);

const message = ref('Very Weak');
const messageColor = ref('text-red-600');
const strengthBarWidth = ref('0%');
const strengthBarColor = ref('#ef4444');

const generatePassword = () => {
  let pass = '';
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  if (numberAllowed.value) chars += '0123456789';
  if (symbolAllowed.value) chars += '!@#$%&*?';

  for (let i = 0; i < length.value; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    pass += chars[randomIndex];
  }
  password.value = pass;
  evaluateStrength(pass);
};

const evaluateStrength = (val) => {
  if (!val || val.length === 0) {
    strengthBarWidth.value = '0%';
    message.value = 'Very Weak';
    return;
  }

  let score = 0;
  if (val.length >= 8) score++;
  if (val.length >= 12) score++;
  if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;

  if (val.length <= 6 || score <= 1) {
    message.value = 'Very Weak';
    strengthBarWidth.value = '20%';
    strengthBarColor.value = '#ef4444'; // Red
    messageColor.value = 'text-red-600';
  } else if (score === 2) {
    message.value = 'Weak';
    strengthBarWidth.value = '40%';
    strengthBarColor.value = '#f97316'; // Orange
    messageColor.value = 'text-orange-600';
  } else if (score === 3) {
    message.value = 'Medium';
    strengthBarWidth.value = '60%';
    strengthBarColor.value = '#eab308'; // Yellow
    messageColor.value = 'text-yellow-600';
  } else if (score === 4) {
    message.value = 'Strong';
    strengthBarWidth.value = '80%';
    strengthBarColor.value = '#3b82f6'; // Blue
    messageColor.value = 'text-blue-600';
  } else {
    message.value = 'Very Strong';
    strengthBarWidth.value = '100%';
    strengthBarColor.value = '#22c55e'; // Green
    messageColor.value = 'text-green-600';
  }
};

const copyPasswordToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(password.value);
    copied.value = true;
    setTimeout(() => {
      copied.value = false;
    }, 2000);
  } catch (err) {
    console.error('Failed to copy!', err);
  }
};

// Re-generate and check strength whenever settings change via sliders/checkboxes
watch([length, numberAllowed, symbolAllowed], () => {
  generatePassword();
});

onMounted(() => {
  generatePassword();
});
</script>
