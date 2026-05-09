const header = document.querySelector('[data-header]');
const menuButton = document.querySelector('[data-menu-toggle]');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const paymentUrl = 'https://checkout.revolut.com/pay/4ac6b9e8-836e-464c-9d63-3ee742e89c52';
const locationSuggestions = [
  'Bratislava Airport (BTS)',
  'Bratislava City Centre',
  'Bratislava Main Station',
  'Bratislava Old Town',
  'Bratislava Nivy Bus Station',
  'Vienna International Airport (VIE)',
  'Vienna City Centre',
  'Vienna Hauptbahnhof',
  'Vienna Westbahnhof',
  'Vienna Messe',
  'Vienna Schwechat',
  'Budapest Airport (BUD)',
  'Budapest City Centre',
  'Budapest Keleti Station',
  'Prague Airport (PRG)',
  'Prague City Centre',
  'Prague Main Station',
  'Private Jet Terminal / FBO',
  'Hotel pickup',
  'Corporate office pickup'
];

const routePrices = [
  { from: ['bratislava airport', 'bts'], to: ['bratislava city', 'bratislava centre', 'bratislava center', 'old town'], price: 45 },
  { from: ['bratislava'], to: ['vienna airport', 'vie', 'schwechat'], price: 119 },
  { from: ['vienna airport', 'vie', 'schwechat'], to: ['bratislava'], price: 119 },
  { from: ['bratislava'], to: ['vienna city', 'vienna centre', 'vienna center', 'wien'], price: 149 },
  { from: ['vienna city', 'vienna centre', 'vienna center', 'wien'], to: ['bratislava'], price: 149 },
  { from: ['bratislava'], to: ['budapest'], price: 349 },
  { from: ['budapest'], to: ['bratislava'], price: 349 },
  { from: ['bratislava'], to: ['prague', 'praha'], price: 590 },
  { from: ['prague', 'praha'], to: ['bratislava'], price: 590 },
  { from: ['vienna airport', 'vie', 'schwechat'], to: ['vienna city', 'vienna centre', 'vienna center'], price: 90 },
  { from: ['vienna city', 'vienna centre', 'vienna center'], to: ['vienna airport', 'vie', 'schwechat'], price: 90 },
  { from: ['budapest airport', 'bud'], to: ['vienna airport', 'vie', 'schwechat'], price: 520 },
  { from: ['vienna airport', 'vie', 'schwechat'], to: ['budapest airport', 'bud'], price: 520 }
];
const vehicleCapacity = {
  'Mercedes E-Class': 3,
  'Mercedes S-Class': 3,
  'Mercedes V-Class': 7,
  'Business Van': 7,
  'Executive Sedan': 3
};

const normalize = (value) => String(value || '').toLowerCase().replace(/[()]/g, ' ').replace(/\s+/g, ' ').trim();

const hasAlias = (value, aliases) => aliases.some((alias) => value.includes(alias));

const getBasePrice = (pickup, destination) => {
  const from = normalize(pickup);
  const to = normalize(destination);
  const route = routePrices.find((item) => hasAlias(from, item.from) && hasAlias(to, item.to));
  return route?.price || null;
};

const getVehicleMultiplier = (vehicle) => {
  const selected = normalize(vehicle);
  if (selected.includes('s-class')) return 1.55;
  if (selected.includes('v-class') || selected.includes('business van')) return 1.25;
  return 1;
};

const formatPrice = (price) => `EUR ${Math.round(price)}`;

const passengerCount = (value) => {
  const parsed = Number.parseInt(String(value || '1'), 10);
  return Number.isNaN(parsed) ? 1 : parsed;
};

const whatsappPhone = '421908375787';
const whatsappUrl = `https://wa.me/${whatsappPhone}`;
const getWhatsAppLink = (message) => `${whatsappUrl}?text=${encodeURIComponent(message)}`;

const updateVehicleOptions = (form) => {
  const passengers = passengerCount(form.querySelector('[name="passengers"]')?.value);
  const vehicleSelect = form.querySelector('[name="vehicle"]');

  if (!vehicleSelect) return;

  let firstAvailable = '';
  Array.from(vehicleSelect.options).forEach((option) => {
    const capacity = vehicleCapacity[option.value] || 99;
    const unavailable = capacity < passengers;
    option.disabled = unavailable;
    option.hidden = unavailable;
    if (!unavailable && !firstAvailable) firstAvailable = option.value;
  });

  if (vehicleSelect.selectedOptions[0]?.disabled && firstAvailable) {
    vehicleSelect.value = firstAvailable;
  }
};

const attachLocationSuggestions = () => {
  const datalist = document.createElement('datalist');
  datalist.id = 'luxovia-location-suggestions';
  locationSuggestions.forEach((location) => {
    const option = document.createElement('option');
    option.value = location;
    datalist.append(option);
  });

  document.body.append(datalist);
  document.querySelectorAll('input[name="pickup"], input[name="destination"]').forEach((input) => {
    input.setAttribute('list', datalist.id);
    input.setAttribute('autocomplete', input.name === 'pickup' ? 'street-address' : 'off');
  });
};

const setHeaderState = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 20);
};

setHeaderState();
attachLocationSuggestions();
window.addEventListener('scroll', setHeaderState, { passive: true });

menuButton?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    header?.classList.remove('menu-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

if (!reduceMotion && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
} else {
  document.querySelectorAll('.reveal').forEach((element) => element.classList.add('is-visible'));
}

document.querySelectorAll('[data-booking-form]').forEach((form) => {
  updateVehicleOptions(form);
  form.querySelector('[name="passengers"]')?.addEventListener('change', () => updateVehicleOptions(form));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const pickup = data.get('pickup') || 'Pickup location';
    const destination = data.get('destination') || 'Destination';
    const datetime = data.get('datetime') || 'Preferred date and time';
    const passengers = data.get('passengers') || '1';
    const luggage = data.get('luggage') || '1';
    const vehicle = data.get('vehicle') || 'Premium vehicle';
    const notes = data.get('notes') || '';
    const basePrice = getBasePrice(pickup, destination);
    const estimatedPrice = basePrice ? formatPrice(basePrice * getVehicleMultiplier(vehicle)) : null;
    const message = [
      'Hello Luxovia, I would like to request a chauffeur quote.',
      `Pickup: ${pickup}`,
      `Destination: ${destination}`,
      `Date/time: ${datetime}`,
      `Passengers: ${passengers}`,
      `Luggage: ${luggage}`,
      `Vehicle: ${vehicle}`,
      `Estimated quote: ${estimatedPrice || 'Custom quote required'}`,
      notes ? `Notes: ${notes}` : ''
    ].filter(Boolean).join('\n');
    const whatsappLink = getWhatsAppLink(message);
    let result = form.querySelector('.quote-result');

    if (!result) {
      result = document.createElement('div');
      result.className = 'quote-result';
      form.append(result);
    }

    result.innerHTML = `
      <span class="quote-label">Estimated transfer quote</span>
      <strong>${estimatedPrice || 'Custom quote required'}</strong>
      <p>${estimatedPrice
        ? `Estimated starting price for ${pickup} to ${destination}. Final confirmation depends on availability, waiting time and exact pickup details.`
        : `This route needs manual confirmation. Send the request and Luxovia will reply with the exact price and availability.`}</p>
      <div class="quote-meta">
        <span>${passengers} passenger${passengers === '1' ? '' : 's'}</span>
        <span>${luggage} luggage</span>
        <span>${vehicle}</span>
      </div>
      <div class="quote-actions">
        <a class="button primary full" href="${whatsappLink}" target="_blank" rel="noopener">Send request on WhatsApp</a>
        <a class="button ghost full" href="${paymentUrl}" target="_blank" rel="noopener">Pay after confirmation</a>
      </div>
      ${notes ? `<small>Notes: ${notes}</small>` : ''}
    `;

    result.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
  });
});
